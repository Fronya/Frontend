import React from 'react';
import { Link } from 'react-router';

export default class Register extends React.Component {
	render(){
		return(
			<div className="all-content">
				<div className="content-form content-col-2">
					<form action="" className="register-form">
					<div className="column-form">
						<div className="field">
							<input type="text" id="last-name"/>
							<label for="last-name">Last name</label>
						</div>
						<div className="field">
							<input type="text" id="first-name"/>
							<label for="first-name">First name</label>
						</div>
						<div className="field">
							<input type="text" id="city"/>
							<label for="city">City</label>
						</div>
						<div className="field">
							<input type="text" id="address"/>
							<label for="address">Address</label>
						</div>
						
					</div>
					<div className="column-form">
						<div className="field">
							<input type="text" id="email"/>
							<label for="email">Email</label>
						</div>
						<div className="field">
							<input type="password" id="password"/>
							<label for="password">Password</label>
						</div>
						<div className="field">
							<input type="password" id="confirm-password"/>
							<label for="confirm-password">Confirm Password</label>
						</div>
						<div className="field">
							<input type="text" id="phone"/>
							<label for="phone">Phone</label>
						</div>
						<div className="field">
							<button type="submit" className="attribute-btn price-btn">Register</button>
							<Link to="/login"><button type="submit" className="attribute-btn price-btn">Login</button></Link>
							<Link to="/"><button type="submit" className="attribute-btn price-btn">To Index Page</button></Link>
						</div>
					</div>
					</form>
					</div>
				</div>
		);
	}
}