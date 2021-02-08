/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { getUser, updateUser } from "./helper/userapicalls";

const AddProducts = () => {
	const [values, setValues] = useState({
		name: "",
		email: "",
		error: "",
		success: false,
	});

	const { user, token } = isAuthenticated();
	const { name, email, error, success } = values;

	const preload = () => {
		getUser(user._id, token).then((data) => {
			console.log("USER DATA", data);

			if (data.error) {
				setValues({ ...values, error: data.error });
			} else {
				setValues({
					...values,
					name: data.name,
					email: data.email,
				});
			}
		});
	};

	useEffect(() => {
		preload();
	}, );

	//Handling input onChange events
	const handleNameChange = (name) => (event) => {
		setValues({ error: false, [name]: event.target.value });
	};

	const handleEmailChange = (email) => (event) => {
		setValues({ error: false, [email]: event.target.value });
	};

	const onSubmit = (event) => {
		event.preventDefault();
		setValues({ ...values, error: "", success: "false" });
		updateUser({ name, email }, user._id, token).then((data) => {
			if (data.error) {
				setValues({
					...values,
					error: data.error,
				});
			} else {
				setValues({
					...values,
					name: "",
					email: "",
					success: true,
				});
			}
		});
	};

	const successMessage = () => {
		return (
			<div className='row rounded'>
				<div className='col-md-6 offset-md-3'>
					<div
						className='alert alert-success'
						style={{ display: success ? "" : "none" }}>
						Information changed succesfully!
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

	const userProfile = () => (
		<form className='mt-3'>
			<div className='form-group'>
				<input
					onChange={handleNameChange("name")}
					className='form-control'
					placeholder='Name'
					value={name}
					onClick={() => {
						setValues({ name: "" });
					}}
				/>
			</div>
			<div className='form-group'>
				<input
					onChange={handleEmailChange("email")}
					type='email'
					className='form-control'
					placeholder='E-Mail'
					value={email}
					onClick={() => {
						setValues({ email: "" });
					}}
				/>
			</div>

			<button
				type='submit'
				onClick={onSubmit}
				className='btn btn-outline-success mb-3'>
				Submit
			</button>
		</form>
	);

	return (
		<Base
			title='Edit your profile'
			description='Enter new details'
			className='container bg-info p-4'>
			<div className='row '>
				<div className='col-3'>
					<Link
						className='btn btn-outline-dark mb-4 rounded'
						to='/admin/dashboard'>
						Back to admin
					</Link>
				</div>
				<div className='col-6 mr-2 '>
					{successMessage()}
					{errorMessage()}
				</div>
			</div>
			<div className='row bg-dark text-white rounded ml-1 mr-1'>
				<div className='col-md-8 offset-md-2'>{userProfile()}</div>
			</div>
		</Base>
	);
};

export default AddProducts;
