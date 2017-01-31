import React from 'react';
import { browserHistory } from 'react-router';
import CartStorage from '../utils/CartStorage';
import Order from './Order.jsx';
import Load from '../utils/load';

export default class Cart extends React.Component {
	constructor(props){
		super(props);
		let cart = CartStorage.getProducts();
		this.state = {cart: cart,
			errorSubmit: false};

		this.deleteOrder = this.deleteOrder.bind(this);
		this.submitOrder = this.submitOrder.bind(this);
		this.reciveData = this.reciveData.bind(this);
	}


	deleteOrder(product){
		let index = this.state.cart.indexOf(product);
		if(index !== -1){
			let array = this.state.cart;
			array.splice(index, 1);
			this.setState({
				cart: array
			});
		}
	}

	reciveData(data){
		if(data === true){
			CartStorage.deleteProducts();
			browserHistory.push("/women");
		}else{
			browserHistory.push("/login");
		}
	}

	submitOrder(){
		let loader = new Load();
		loader.sendOrder().then(r => this.reciveData(r));
	}

	render(){
		let total = 0;
		return(
			<div className="content-form content-info">
				<div className="title-table">Cart</div>
				<table>
					<thead>
						<tr className="tr-cart">
							<th>Product</th>
							<th>Size</th>
							<th>Quantity</th>
							<th>Price</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{Array.isArray(this.state.cart) ? (this.state.cart.map((order) => {let compOrder = (<Order product={order} deleteOrder={this.deleteOrder}/>);
							total += (order.quantity * order.size.price);
							return compOrder;
					})) : (<tr><td>Cart is empty</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td></tr>)}
						<tr class='tr-item-total'>
							<td></td>
							<td></td>
							<td></td>
							<td>Item total</td>
							<td></td>
						</tr>
						<tr class='tr-total-value'>
							<td></td>
							<td></td>
							<td></td>
							<td>${total}</td>
							<td></td>
						</tr>
					</tbody>
				</table>
				<button className="attribute-btn price-btn order-btn" onClick={this.submitOrder}>Order</button>
			</div>
		);
	}
}