/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link, Redirect } from "react-router-dom";
import { getCategories, createProduct } from "./helper/adminapicall";
import { isAuthenticated } from "../auth/helper";

const AddProducts = () => {
	const { user, token } = isAuthenticated();
	const [values, setValues] = useState({
		name: "",
		description: "",
		price: "",
		stock: "",
		photo: "",
		categories: [],
		category: "",
		loading: false,
		error: "",
		createdProduct: "",
		getRedirect: false,
		formData: "",
	});

	const {
		name,
		description,
		price,
		stock,
		photo,
		categories,
		category,
		loading,
		error,
		createdProduct,
		getRedirect,
		formData,
	} = values;

	const preload = () => {
		getCategories().then((data) => {
			//console.log("CATEGORIES", data);

			if (data.error) {
				return setValues({ ...values, error: data.error });
			} else {
				return setValues({
					...values,
					categories: data,
					formData: new FormData(),
				});
			}
		});
		//console.log("CATEGORIES", categories);
	};

	useEffect(() => {
		preload();
	}, );

	const onSubmit = (event) => {
		event.preventDefault();
		setValues({ ...values, error: "", loading: "true" });

		createProduct(user._id, token, formData)
			.then((data) => {
				if (data.error) {
					return setValues({ ...values, error: data.error });
				} else {
					setValues({
						...values,
						name: "",
						description: "",
						price: "",
						stock: "",
						loading: false,
						createdProduct: data.name,
						photo: "",
						category: "select",
					});
				}
				if (createProduct) {
					setValues({ getRedirect: true });
				}
			})
			.catch((err) => console.log(err));
	};

	const handleChange = (attrib) => (event) => {
		const value =
			attrib === "photo" ? event.target.files[0] : event.target.value;
		formData.set(attrib, value);
		setValues({ ...values, [attrib]: value });
	};

	const successMessage = () => {
		return (
			<div className='row rounded'>
				<div className='col-md-6 offset-md-3'>
					<div
						className='alert alert-success'
						style={{ display: createdProduct ? "" : "none" }}>
						{createdProduct} is created!!
					</div>
				</div>
			</div>
		);
	};

	const errorMessage = () => {
		return (
			<div className='row rounded'>
				<div className='col-md-6 offset-md-3'>
					<div
						className='alert alert-danger'
						style={{ display: error ? "" : "none" }}>
						{error}
					</div>
				</div>
			</div>
		);
	};

	const createProductForm = () => (
		<form>
			<span>Post photo</span>
			<div className='form-group'>
				<label className='btn btn-block btn-success'>
					<input
						onChange={handleChange("photo")}
						type='file'
						name='photo'
						accept='image'
						placeholder='choose a file'
						className='rounded'
					/>
				</label>
			</div>
			<div className='form-group'>
				<input
					onChange={handleChange("name")}
					name='photo'
					className='form-control'
					placeholder='Name'
					value={name}
				/>
			</div>
			<div className='form-group'>
				<textarea
					onChange={handleChange("description")}
					name='photo'
					className='form-control'
					placeholder='Description'
					value={description}
				/>
			</div>
			<div className='form-group'>
				<input
					onChange={handleChange("price")}
					type='number'
					className='form-control'
					placeholder='Price'
					value={price}
				/>
			</div>
			<div className='form-group'>
				<select
					onChange={handleChange("category")}
					className='form-control'
					placeholder='Category'>
					<option>Select</option>
					{categories &&
						categories.map((c, index) => {
							return (
								<option key={index} value={c._id}>
									{c.name}
								</option>
							);
						})}
				</select>
			</div>
			<div className='form-group'>
				<input
					onChange={handleChange("stock")}
					type='number'
					className='form-control'
					placeholder='Quantity'
					value={stock}
				/>
			</div>

			<button
				type='submit'
				onClick={onSubmit}
				className='btn btn-outline-success mb-3'>
				Create Product
			</button>
		</form>
	);

	return (
		<Base
			title='Add Products here'
			description='Welcome to product creation section'
			className='container bg-info p-4'>
			{errorMessage()}
			<Link className='btn btn-outline-dark mb-4 rounded' to='/admin/dashboard'>
				Back to admin
			</Link>
			<div className='row bg-dark text-white rounded ml-1 mr-1'>
				<div className='col-md-8 offset-md-2'>{createProductForm()}</div>
			</div>
			{successMessage()}
		</Base>
	);
};

export default AddProducts;
