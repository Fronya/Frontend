import React from 'react';
import { Link } from 'react-router';
import Auth from '../utils/Auth';
import CartStorage from '../utils/CartStorage';
import Load from '../utils/load';

export default class Layout extends React.Component {

	constructor(props){
		super(props);
		this.state = {logout: false};

		this.logoutFunction = this.logoutFunction.bind(this);
		this.reciveLogout = this.reciveLogout.bind(this);
	}

	logoutFunction(){
		console.log("In logoutFunction");
		let loader = new Load();
		loader.logout().then(r => this.reciveLogout(r));
	}

	reciveLogout(result){
		console.log("In recive")
		if(result === true){
			Auth.logout();
		}
	}


	render(){
		return(
			<div>
			<div className="mini-header">
				<div className="content">
					<div className="text-mini-header"><i className="fa fa-phone" aria-hidden="true"></i> 24/7 Free Support</div>
					<div className="right-menu">
						<div className="text-mini-header menu-case">English <i className="fa fa-angle-down" aria-hidden="true"></i></div>
						<div className="div-inline"><a className="text-mini-header menu-case main-item" href="javascript:void(0);">
							<i className="fa fa-cog" aria-hidden="true"></i> My Account <i className="fa fa-angle-down" aria-hidden="true"></i></a>
							{Auth.isUserAuthenticated() ? (
								<div className="sub-menu">
									<Link className="text-mini-header menu-case" to="#">User Profile</Link>
									<Link className="text-mini-header menu-case" to="#" onClick={this.logoutFunction}>Logout</Link>
								</div>
								 ):(<div className="sub-menu">
									<Link className="text-mini-header menu-case" to="/login">Login</Link>
									<Link className="text-mini-header menu-case" to="/register">Register</Link>
								</div>)
							}
						</div>
					</div>
				</div>
			</div>
			<div className="label-header content">
				<div className="label-item"><Link to="/women"><img src="/img/PerfumeShop2.png" alt=""/></Link></div>
				<div className="label-cart">
				{Auth.isAdmin() ? (
				<Link to="/orders">Show orders</Link>
					):(
				<Link to="/cart"><span className="cart-icon"><i className="fa fa-shopping-basket" aria-hidden="true"></i></span> Shopping Cart({CartStorage.countProduct()})</Link>
				)}

				</div>
			</div>
			<div className="menu">
				<div className="content">
					<Link to="/women" activeClassName="active-case" className="main-menu-case">Women</Link>
					<Link to="/men" activeClassName="active-case" className="main-menu-case menu-item-close-2">Men</Link>
					<Link to="/unisex" activeClassName="active-case" className="main-menu-case menu-item-close-2">Unisex</Link>
				</div>
			</div>
			<div className="content content-site">
				{this.props.children}
			</div>
			<div className="footer"> &copy;2017 Developed by Olga Gubareva</div>
			</div>
		);
	}
}