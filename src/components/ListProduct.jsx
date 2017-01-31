import React from 'react';
import { Link } from 'react-router';
import ProductBlock from './ProductBlock.jsx';

export default class ListProduct extends React.Component {

	render(){
		return(
			<div>
			<div className="left-panel">
				<div className="left-menu">
					<div className="left-menu-main active-left-menu"><i className="fa fa-list-ul" aria-hidden="true"></i> CATEGORIES</div>
					<Link to="/women" className="left-menu-item" activeClassName="active-left-menu">Women</Link>
					<Link to="/men" className="left-menu-item" activeClassName="active-left-menu">Men</Link>
					<Link to="/unisex" className="left-menu-item" activeClassName="active-left-menu">Unisex</Link>
				</div>
			</div>
			<div className="right-content">
				{this.props.children}
			</div>
			</div>
		);
	}
}