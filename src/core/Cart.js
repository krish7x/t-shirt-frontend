/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "../styles.css";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/carthelper";
import StripeCheckout from "../payment gateways/StripeCheckout";

export default function Cart() {
	const [product, setProduct] = useState([]);
	const [reload, setReload] = useState(false);

	useEffect(() => {
		setProduct(loadCart());
	}, [reload]);

	console.log(product);

	const loadAllProducts = (product) => (
		<div>
			{product.length === 0 ? "" : <h1>Your Orders</h1>}
			{product.map((product, index) => {
				return (
					<Card
						key={index}
						product={product}
						addtoCart={false}
						removefromCart={true}
						reload={reload}
						setReload={setReload}
					/>
				);
			})}
		</div>
	);

	const loadCheckout = () => (
		<div>{product.length === 0 ? "" : <h1>Checkout</h1>}</div>
	);
	return (
		<Base title='Cart Page' description='Ready to checkout'>
			<div className='row text-center mt-2'>
				<div className='col-3'>{loadAllProducts(product)}</div>
				<div className='col-3'></div>
				<div className='col-6'>
					<StripeCheckout
						product={product}
						reload={reload}
						setReload={setReload}
					/>
				</div>
			</div>
		</Base>
	);
}
