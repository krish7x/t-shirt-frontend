/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { isAuthenticated } from "../auth/helper";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { API } from "../backend";
import { emptyCart } from "../core/helper/carthelper";

const Stripecheckout = ({ product, setReload = (f) => f, reload = true }) => {
	const [data, setData] = useState({
		loading: false,
		error: "",
		success: false,
		address: "",
	});

	const token = isAuthenticated() && isAuthenticated().token;
	const userId = isAuthenticated() && isAuthenticated().user_id;

	const totalCartPrice = () => {
		let amount = 0;
		product.map((p) => {
			amount = Math.round(amount + p.price);
		});
		return amount;
	};

	const makePayment = (token) => {
		const body = {
			token,
			product,
		};
		const headers = {
			"Content-Type": "application/json",
		};

		return (
			fetch(`${API}/stripepayment`, {
				method: "POST",
				headers,
				body: JSON.stringify(body),
			})
				.then((response) => {
					console.log(response);
					const { status } = response;
					console.log("STATUS", status);
				})
				//can call further methods here

				.catch((err) => console.log(err))
		);
	};

	const stripeButton = () => {
		if (product.length !== 0 && isAuthenticated()) {
			return (
				<StripeCheckout
					stripeKey='pk_test_eVhG4rgveaH5Yh9ZeqaShRK100aJJ8wjAk'
					token={makePayment}
					amount={totalCartPrice() * 100}
					name='Buy T-Shirts'
					shippingAddress
					billingAddress>
					<button className='btn btn-success rounded'>Pay with stripe</button>
				</StripeCheckout>
			);
		} else if (product.length !== 0 || !isAuthenticated()) {
			return (
				<Link to='/signin'>
					<button className='btn btn-danger rounded'>Signin</button>
				</Link>
			);
		}
	};

	return (
		<div>
			{product.length === 0 ? (
				""
			) : (
				<h1>
					Stripe Checkout
					<span className='text-success'> $ {totalCartPrice()}</span>
				</h1>
			)}
			{stripeButton()}
		</div>
	);
};

export default Stripecheckout;
