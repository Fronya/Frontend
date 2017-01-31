import React from 'react';
import AdminProduct from './AdminProduct.jsx';

export default class AdminOrder extends React.Component {

	render(){
		let total=0;
		return(
			<table className="table-order">
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
			{this.props.order.orders.map((o) => {
				total += o.count*o.price;
				let p = (<AdminProduct product={o} key={`Admin-product${total + o.count}`}/>);
				return p;
			})}
			<tr className='tr-item-total'>
				<td></td>
				<td></td>
				<td></td>
				<td>Item total</td>
				<td></td>
			</tr>
			<tr className='tr-total-value'>
				<td>Date  {this.props.order.date}</td>
				<td>Time  {this.props.order.time}</td>
				<td>Show user</td>
				<td>${total}</td>
				<td><i className="fa fa-times" aria-hidden="true"></i></td>
			</tr>
			</tbody>
			</table>
		);
	}

}