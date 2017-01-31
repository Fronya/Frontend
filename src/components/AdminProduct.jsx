import React from 'react';

export default class AdminProduct extends React.Component {

	render(){
		return(
			<tr>
				<td>{this.props.product.name}</td>
				<td>{this.props.product.value}</td>
				<td>{this.props.product.count}</td>
				<td>${this.props.product.price}</td>
				<td></td> 
			</tr>
		);
	}
}