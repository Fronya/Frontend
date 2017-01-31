import React from 'react';
import { Link } from 'react-router';

export default class Product extends React.Component {

	render(){
		return(
			<div className="product-details">
				<div className="product-img">
					<img src={this.props.product.pathImage}/>
					<div className="shadow">
						<Link to={`/products/${this.props.product.id}`} className="main-link link-img main-big-link">
							<i className="fa fa-shopping-basket" aria-hidden="true"></i>
						</Link>
					</div>
				</div>

				<div className="product-content">
					{this.props.product.name}
					<div className="stars"><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></div>
					<div className="info price">from ${this.props.product.minPrice}</div>
				</div>
			</div>
		);
	}
}