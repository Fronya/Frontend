import React from 'react';
import Load from '../utils/load';
import AdminOrder from './AdminOrder.jsx';

export default class Orders extends React.Component {

	constructor(props){
		super(props);
		this.state = {orderList: null};

		let loader = new Load();
		loader.getOrders()
			.then(r => this.setState({orderList:r}));
	}

	render(){
		if(this.state.orderList === null){
			return(<div className="loading">Loading...</div>);
		}else if(this.state.orderList === []){
			return(<div className="loading">Orders don't exist</div>);
		}else{
			return(
				<div className="content-form content-info">
				<div className="title-table">Orders</div>
				{this.state.orderList.map(order => <AdminOrder order={order} key={`admin-order${order.idOrder}`} />)}
				</div>
			);
		}
	}
}