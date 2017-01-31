import React from 'react';
import CartStorage from '../utils/CartStorage';

export default class Order extends React.Component {
	deleteOrder(){
		CartStorage.deleteProduct(this.props.product);
		this.props.deleteOrder(this.props.product);
	}

	render(){
		return(
			<tr>
				<td>{this.props.product.name}</td>
				<td>{this.props.product.size.value}</td>
				<td>{this.props.product.quantity}</td>
				<td>${this.props.product.size.price*this.props.product.quantity}</td>
				<td><button className='btn-delete' onClick={this.deleteOrder.bind(this)}><i className="fa fa-times" aria-hidden="true"></i></button></td> 
			</tr>
		);
	}
}