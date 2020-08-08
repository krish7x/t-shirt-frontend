/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { getCategories, deleteCategories } from "./helper/adminapicall";

const ManageCategories = () => {
	const [category, setCategory] = useState([]);
	const [error, setError] = useState([]);
	const { user, token } = isAuthenticated();

	const preload = (categoryId) => {
		getCategories(categoryId).then((data) => {
			if (data.error) {
				setCategory(console.log(data.error));
			} else {
				setCategory(data);
			}
		});
	};
	console.log("ID", category._id);

	useEffect(() => {
		preload();
	}, []);

	const deletedCategoryMethood = (categoryId) => {
		deleteCategories(categoryId, user._id, token).then((data) => {
			if (data.error) {
				setError(data.error);
			} else {
				preload();
			}
		});
	};
	return (
		<Base
			title='Manage Category here'
			description='Category management section'>
			<h2 className='mb-4'>All Categories:</h2>
			<Link className='btn btn-info rounded' to={`/admin/dashboard`}>
				<span className=''>Admin Home</span>
			</Link>
			<div className='row'>
				<div className='col-12'>
					<h2 className='text-center text-white my-3'>
						Total {category.length} Categories
					</h2>

					{category.map((category, index) => {
						return (
							<div className='row text-center mb-2 ' key={index}>
								<div className='col-4'>
									<h4
										className='text-white text-center'
										style={{
											border: "1px solid #17A2B8",
											padding: "6px 12px",
											"border-radius": "4px",
											background: "#17A2B8",
											color: "black",
											fontSize: "18px",
										}}>
										{category.name}
									</h4>
								</div>
								<div className='col-4'>
									<Link
										className='btn btn-success rounded'
										to={`/admin/catgory/${category._id}`}>
										<span className=''>Update</span>
									</Link>
								</div>
								<div className='col-4'>
									<button
										onClick={() => {
											deletedCategoryMethood(category._id);
											console.log(category._id);
										}}
										className='btn btn-danger rounded'>
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

export default ManageCategories;
