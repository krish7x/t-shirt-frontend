/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Base from '../core/Base';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth/helper';
import { getAllProducts, deleteProduct } from './helper/adminapicall';

const ManageProducts = () => {
	const [ product, setProduct ] = useState([]);

	const { user, token } = isAuthenticated();

	const preload = () => {
		getAllProducts().then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				setProduct(data);
			}
		});
	};

	useEffect(() => {
		preload();
	}, []);

	const deleteProductMethod = (productId) => {
		deleteProduct(productId, user._id, token).then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				preload();
			}
		});
	};

	return (
		<Base title="Welcome admin" description="Manage products here">
			<h2 className="mb-4">All products:</h2>
			<Link className="btn btn-info rounded ml-3" to={`/admin/dashboard`}>
				<span className="">Admin Home</span>
			</Link>

			<div className="row">
				<div className="col-12">
					<h2 className="text-center text-white my-3">Total {product.length} products</h2>

					{product.map((product, index) => {
						return (
							<div className="row text-center mb-2 " key={index}>
								<div
									className="col-4"
									style={{
										width: '200px'
									}}>
									<h3
										className="text-white text-center"
										style={{
											border: '1px solid #17A2B8',
											padding: '6px 12px',
											'border-radius': '4px',
											background: '#17A2B8',
											color: 'black',
											fontSize: '18px'
										}}>
										{product.name}
									</h3>
								</div>
								<div className="col-4">
									<Link
										className="btn btn-success rounded"
										to={`/admin/product/update/${product._id}`}>
										<span className="">Update</span>
									</Link>
								</div>
								<div className="col-4">
									<button
										onClick={() => {
											deleteProductMethod(product._id);
										}}
										className="btn btn-danger rounded">
										Delete
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</Base>
	);
};

export default ManageProducts;
