/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper/index";
import { Link } from "react-router-dom";
import { getUser } from "./helper/userapicalls";

const AdminDashBoard = () => {
	const [user, setUser] = useState([]);

	const {
		user: { _id, name, email, role },
		token,
	} = isAuthenticated();

	const preload = () => {
		getUser(_id, token).then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				setUser(data);
			}
		});
	};

	useEffect(() => {
		preload();
	}, []);

	const LeftSide = () => {
		return (
			<div className='card rounded'>
				<h4 className='card-header text-white bg-dark '>Navigation</h4>
				<ul className='list-group list-group-flush'>
					<li className='list-group-item'>
						<Link to='/admin/category/create' className='nav-link text-success'>
							Create Categories
						</Link>
					</li>
					<li className='list-group-item'>
						<Link to='/admin/categories' className='nav-link text-success'>
							Manage Categories
						</Link>
					</li>
					<li className='list-group-item'>
						<Link to='/admin/create/product' className='nav-link text-success'>
							Create Products
						</Link>
					</li>
					<li className='list-group-item'>
						<Link to='/admin/products' className='nav-link text-success'>
							Manage Products
						</Link>
					</li>
					<li className='list-group-item'>
						<Link to='/admin/orders' className='nav-link text-success'>
							Manage Orders
						</Link>{" "}
					</li>
				</ul>
			</div>
		);
	};

	const RightSide = () => {
		return (
			<div className='card'>
				<h4 className='card-header'>Admin Information</h4>

				<ul className='list-group'>
					<li className='list-group-item'>
						<span className='badge badge-success mr-4 p-2'>Name</span>
						{user.name}
					</li>
					<li className='list-group-item'>
						<span className='badge badge-success mr-4 p-2'>E-mail</span>
						{user.email}
					</li>
					<li className='list-group-item'>
						<span className='badge badge-danger mr-4 p-2'>
							Admin Previliege
						</span>
					</li>
				</ul>
			</div>
		);
	};
	return (
		<Base
			title='Welcome to Admin Dashboard'
			description='Organize your stuff'
			className='container bg-success rounded p-4'>
			<div className='row p-4'>
				<div className='col-3'>{LeftSide()}</div>
				<div className='col-7'>{RightSide()}</div>
				<div className='col-2'>
					<Link to={`/admin/${_id}`} className='btn btn-dark rounded mb-4 '>
						Edit profile
					</Link>
				</div>
			</div>
		</Base>
	);
};

export default AdminDashBoard;
