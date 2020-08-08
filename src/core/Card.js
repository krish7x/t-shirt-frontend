/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import Imagehelper from "./helper/Imagehelper";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeCart } from "./helper/carthelper";

const Card = ({
	product,
	addtoCart = true,
	removefromCart = false,
	setReload = (f) => f,
	reload = undefined,
}) => {
	const [redirect, setRedirect] = useState(false);
	const [count, setCount] = useState(product.count);

	const productTitle = product ? product.name : "Default name";
	const productDescription = product
		? product.description
		: "Default description";
	const productPrice = product ? product.price : "Default price";

	const addToCart = () => {
		addItemToCart(product, () => setRedirect(true));
	};

	const getRidirect = (redirect) => {
		if (redirect) {
			return <Redirect to='/cart' />;
		}
	};
	const showAddtoCart = (addtoCart) => {
		if (addtoCart) {
			return (
				<button
					onClick={addToCart}
					className='btn btn-block btn-outline-success mt-2 mb-2'>
					Add to Cart
				</button>
			);
		}
	};

	const showRemovefromCart = (removeFromCart) => {
		if (removeFromCart) {
			return (
				<button
					onClick={() => {
						removeCart(product._id);
						setReload(!reload);
					}}
					className='btn btn-block btn-outline-danger mt-2 mb-2'>
					Remove from cart
				</button>
			);
		}
	};

	return (
		<div className='card text-white text-center bg-dark border border-info mt-3'>
			<div className='card-header lead'>{productTitle}</div>
			<div className='card-body'>
				<Imagehelper product={product} />
				<p className='lead bg-primary font-weight-normal text-wrap'>
					{productDescription}
				</p>
				<p className='btn btn-info rounded  btn-sm px-4'>$ {productPrice}</p>
				<div className='row'>
					<div className='col-12'>{showAddtoCart(addtoCart)}</div>
					<div className='col-12'>{showRemovefromCart(removefromCart)}</div>
				</div>
				{getRidirect(redirect)}
			</div>
		</div>
	);
};

export default Card;
