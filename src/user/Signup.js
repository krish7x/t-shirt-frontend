import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";

const Signup = () => {
	const [values, setValues] = useState({
		name: "",
		email: "",
		password: "",
		error: "",
		success: false,
	});

	//destructuring
	const { name, email, password, error, success } = values;

	//Handling input onChange events
	const handleNameChange = (name) => (event) => {
		setValues({ ...values, error: false, [name]: event.target.value });
	};

	const handleEmailChange = (email) => (event) => {
		setValues({ ...values, error: false, [email]: event.target.value });
	};

	const handlePasswordChange = (password) => (event) => {
		setValues({ ...values, error: false, [password]: event.target.value });
	};

	//Handling button onClick event

	const onSubmit = (event) => {
		event.preventDefault();
		setValues({ ...values, error: false });
		signup({ name, email, password })
			.then((data) => {
				if (data.error) {
					setValues({ ...values, error: data.error, success: false });
				} else {
					setValues({
						...values,
						name: "",
						email: "",
						password: "",
						error: "",
						success: true,
					});
				}
			})
			.catch(console.log("Error in signup"));
	};

	//for printing success message
	const successMessage = () => {
		return (
			<div className='row'>
				<div className='col-md-6 offset-sm-3 text-left'>
					<div
						className='alert alert-success'
						style={{ display: success ? "" : "none" }}>
						New account was created successfully. Please
						<Link to='/signin'>Login Here</Link>
					</div>
				</div>
			</div>
		);
	};

	//for printing error message
	const errorMessage = () => {
		return (
			<div className='row'>
				<div className='col-md-6 offset-sm-3 text-left'>
					<div
						className='alert alert-danger'
						style={{ display: error ? "" : "none" }}>
						{error}
					</div>
				</div>
			</div>
		);
	};

	//Main form goes here
	const signUpForm = () => {
		return (
			<div className='row'>
				<div className='col-md-6 offset-sm-3 text-left'>
					<form>
						<div className='form-group'>
							<label className='text-light'>Name</label>
							<input
								className='form-control'
								onChange={handleNameChange("name")}
								type='text'
								value={name}
								placeholder='eg: james,john doe..'
							/>
						</div>
						<div className='form-group'>
							<label className='text-light'>Email</label>
							<input
								className='form-control'
								onChange={handleEmailChange("email")}
								type='email'
								value={email}
								placeholder='example@email.com'
							/>
						</div>

						<div className='form-group'>
							<label className='text-light'>Password</label>
							<input
								onChange={handlePasswordChange("password")}
								className='form-control'
								type='password'
								value={password}
								placeholder='..........'
							/>
						</div>
						<button onClick={onSubmit} className='btn btn-success btn-block'>
							Submit
						</button>
					</form>
				</div>
			</div>
		);
	};

	return (
		<Base title='Sign up page' description='A page for user to sign up!'>
			{successMessage()}
			{errorMessage()}
			{signUpForm()}
			<div className='cotainer bg-info py-3 rounded '>
				<p className='text-white text-center'>{JSON.stringify(values)}</p>
			</div>
		</Base>
	);
};

export default Signup;
