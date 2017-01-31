import React from 'react';
import { Link } from 'react-router';
import Load from '../utils/load';
import Product from './Product.jsx';

export default class ProductBlock extends React.Component {

	constructor(props){
		super(props);
		this.state = {products:null};

		let type = this.props.type;
		let loader = new Load();
		loader.fromUrl("http://localhost:8081/products?type=" + type)
			.then(r => this.setState({products:r}));
		console.log(this.state.products);
	}

	render(){
		if(this.state.products === null){
			return(<div className="loading">Loading...</div>);
		}else if(this.state.products === []){
			return(<div className="loading">Store is empty</div>);
		}else return(
				<div>{this.state.products.map(p => <Product key={`list-product${p.id}`} product={p}/>)}</div>
			);
		}
}
