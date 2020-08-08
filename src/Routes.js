/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminRoute from "./auth/helper/AdminRoute";
import PrivateRoute from "./auth/helper/PrivateRoute";
import AdminDashBoard from "./user/AdminDashBoard";
import UserDashBoard from "./user/UserDashBoard";
import AddCategory from "./admin/AddCategory";
import ManageCategories from "./admin/ManageCategories";
import AddProducts from "./admin/AddProduct";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import UpdateCategories from "./admin/UpdateCategories";
import EditProfile from "./user/EditProfile";
import Cart from "./core/Cart";

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/signup' exact component={Signup} />
				<Route path='/signin' exact component={Signin} />
				<Route path='/cart' exact component={Cart} />
				<PrivateRoute path='/user/dashboard' exact component={UserDashBoard} />
				<AdminRoute path='/admin/dashboard' exact component={AdminDashBoard} />
				<AdminRoute
					path='/admin/category/create'
					exact
					component={AddCategory}
				/>
				<AdminRoute
					path='/admin/categories'
					exact
					component={ManageCategories}
				/>
				<AdminRoute
					path='/admin/catgory/:categoryId'
					exact
					component={UpdateCategories}
				/>
				<AdminRoute
					path='/admin/create/product'
					exact
					component={AddProducts}
				/>
				<AdminRoute path='/admin/products' exact component={ManageProducts} />
				<AdminRoute
					path='/admin/product/update/:productId'
					exact
					component={UpdateProduct}
				/>
				<AdminRoute path='/admin/:userId' exact component={EditProfile} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
