/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "../styles.css";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";

export default function Home() {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState([]);

	const getAllProducts = () => {
		getProducts().then((data) => {
			if (data.error) {
				return setError(data.error);
			} else {
				return setProducts(data);
			}
		});
	};

	useEffect(() => {
		if (products) getAllProducts();
	}, [products]);
	return (
		<Base title='Home Page' description='Welcome to My Online T-shirt Store'>
			<h1 className='text-white text-center'>Products</h1>
			<div className='row mt-2 ml-2 mr-2	'>
				{products &&
					products.map((product, index) => {
						return (
							<div key={index} className='col-4 id="home-div" mb-4'>
								<Card product={product} />
							</div>
						);
					})}
			</div>
		</Base>
	);
}
