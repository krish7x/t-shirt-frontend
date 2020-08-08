/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { signin, isAuthenticated, aunthenticate } from "../auth/helper";
import Base from "../core/Base";

const Signin = () => {
	const [values, setValues] = useState({
		email: "",
		password: "",
		error: "",
		loading: false,
		didRedirect: false,
	});

	const { email, password, error, loading, didRedirect } = values;
	const { user } = isAuthenticated();

	const handleChange = (name) => (event) => {
		setValues({ ...values, error: false, [name]: event.target.value });
	};

	const onSubmit = (event) => {
		event.preventDefault();
		setValues({ ...values, error: false, loading: true });
		signin({ email, password })
			.then((data) => {
				if (data.error) {
					setValues({ ...values, error: data.error, loading: false });
				} else {
					aunthenticate(data, () => {
						setValues({ ...values, didRedirect: true });
					});
				}
			})
			.catch(console.log("Cannot redirect to signin page"));
	};

	const performRedirect = () => {
		if (didRedirect) {
			if (user && user.role === 1) {
				return <Redirect to='/admin/dashboard' />;
			} else {
				return <Redirect to='/user/dashboard' />;
			}
		}
		if (isAuthenticated()) {
			return <Redirect to='/' />;
		}
	};

	const loadingMessage = () => {
		if (loading) {
			return (
				<div className='alert alert-info'>
					<h2>Loading....</h2>
				</div>
			);
		}
	};

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

	const signInForm = () => {
		return (
			<div className='row'>
				<div className='col-md-6 offset-sm-3 text-left'>
					<form>
						<div className='form-group'>
							<label className='text-light control-label'>E-mail</label>
							<input
								onChange={handleChange("email")}
								type='email'
								className='form-control'
								value={email}
								placeholder='name@example.com'
							/>
						</div>

						<div className='form-group'>
							<label className='text-light'>Password</label>
							<input
								onChange={handleChange("password")}
								type='password'
								className='form-control'
								value={password}
								placeholder='........'
							/>
						</div>
						<button className='btn btn-success btn-block' onClick={onSubmit}>
							Submit
						</button>
					</form>
				</div>
			</div>
		);
	};

	return (
		<Base title='Sign In Page' description='Enter valid credentials'>
			{loadingMessage()}
			{errorMessage()}
			{signInForm()}
			{performRedirect()}
			<div className='cotainer bg-info py-3 rounded '>
				<p className='text-white text-center'>{JSON.stringify(values)}</p>
			</div>{" "}
		</Base>
	);
};

export default Signin;
