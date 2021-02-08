/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { getCategoryById, updateCategories } from "./helper/adminapicall";

export default function AddCategory({ match }) {
	const [name, setName] = useState("");
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);

	const { user, token } = isAuthenticated();

	const preload = (categoryId) => {
		getCategoryById(categoryId).then((data) => {
			console.log("DATA", data);

			if (data.error) {
				setError(data, error);
			} else {
				setName(data.name);
			}
		});
	};

	useEffect(() => {
		preload(match.params.categoryId);
	},);

	const onHandleChange = (event) => {
		setError("");
		setName(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		setError("");
		setSuccess(false);

		//backend req fired here

		updateCategories(match.params.categoryId, user._id, token, { name }).then(
			(data) => {
				if (data.error) {
					setError(data.error);
				} else {
					setError("");
					setSuccess(true);
					setName("");
				}
			}
		);
	};

	const errorMessage = () => {
		return (
			<div className='row'>
				<div className='col-md-6 offset-sm-3 text-center'>
					<div
						className='alert alert-danger '
						style={{ display: error ? "" : "none" }}>
						{error}
					</div>
				</div>
			</div>
		);
	};

	const successMessage = () => {
		return (
			<div className='row'>
				<div className='col-md-6 offset-sm-3 text-center'>
					<div
						className='alert alert-success'
						style={{ display: success ? "" : "none" }}>
						Category saved sucessfully
					</div>
				</div>
			</div>
		);
	};

	const categoryForm = () => (
		<div className='form-group py-3'>
			<p className='lead'>Update Category</p>
			<input
				type='text'
				className='form-control my-3'
				autoFocus
				required
				onChange={onHandleChange}
				placeholder="Ex. 'Summer' "
				value={name}
			/>
			<buton onClick={onSubmit} className='btn btn-outline-info btn-lg rounded'>
				update Category
			</buton>
		</div>
	);

	return (
		<Base
			title='Update category name'
			description='Set a new category name'
			className='container bg-info p-4'>
			<div className='row bg-white rounded ml-1 mr-1'>
				<div className='col-md-8 offset-md-2'>
					<Link
						className='btn btn-outline-dark mt-3 mr-0 rounded'
						to='/admin/dashboard'>
						Back to admin
					</Link>
					<Link
						className='btn btn-outline-dark mt-3 mr-0 rounded ml-3'
						to='/admin/categories'>
						Back to Manage Categories
					</Link>
					{categoryForm()}

					{errorMessage()}
					{successMessage()}
				</div>
			</div>
		</Base>
	);
}
