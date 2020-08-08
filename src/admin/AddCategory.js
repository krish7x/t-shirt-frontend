/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { createCategory } from "./helper/adminapicall";

export default function AddCategory() {
	const [name, setName] = useState("");
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);

	const { user, token } = isAuthenticated();

	const onHandleChange = (event) => {
		setError("");
		setName(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		setError("");
		setSuccess(false);

		//backend req fired here

		createCategory(user._id, token, { name }).then((data) => {
			console.log("NAMEE", name);

			if (data.error) {
				setError(data.error);
			} else {
				setError("");
				setSuccess(true);
				setName("");
			}
		});
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
			<p className='lead'>Enter new Category</p>
			<input
				id='categoryBox'
				type='text'
				className='form-control my-3'
				autoFocus
				required
				onChange={onHandleChange}
				placeholder="Ex. 'Summer' "
				value={name}
			/>
			<buton
				onClick={onSubmit}
				id='categoryButton'
				className='btn btn-outline-info btn-lg rounded'>
				Create Category
			</buton>
		</div>
	);

	return (
		<Base
			title='Create a category'
			description='Manage category for new t-shirts'
			className='container bg-info p-4'>
			<div className='row bg-white rounded ml-1 mr-1'>
				<div className='col-md-8 offset-md-2'>
					<Link
						className='btn btn-outline-dark mt-3 mr-0 rounded'
						to='/admin/dashboard'>
						Back to admin
					</Link>
					{categoryForm()}

					{errorMessage()}
					{successMessage()}
				</div>
			</div>
		</Base>
	);
}
