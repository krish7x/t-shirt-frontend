import React from "react";
import Navbar from "./Navbar";

const Base = ({
	title = "My Title",
	description = "My desription",
	className = "bg-dark text-white p-4",
	children,
}) => (
	<div>
		<Navbar />
		<div className='container-fluid'>
			<div className='jumbotron bg-dark text-white text-center'>
				<h1
					style={{
						fontSize: "45px",
					}}>
					{title}
				</h1>
				<hr style={{ borderColor: "white" }} />
				<p
					className='lead'
					style={{
						fontSize: "18px",
					}}>
					{description}
				</p>
			</div>
			<div className={className}>{children}</div>
		</div>
		<footer className='footer bg-dark mt-auto py-1'>
			<div className='container-fluid bg-success text-white text-center py-3'>
				<h5>If you got any questions, feel free to reach out!</h5>
				<button className='btn btn-warning btn-lg  rounded'>Contact Us</button>
			</div>
			<div className='container text-center'>
				<span className='text-muted'>
					An Amazing <span className='text-white'>T-shirt</span> Store
				</span>
			</div>
		</footer>
	</div>
);

export default Base;
