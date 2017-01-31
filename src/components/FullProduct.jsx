import React from 'react';
import { Link } from 'react-router';
import Load from '../utils/load';
import SizeLink from './SizeLink.jsx';
import CartStorage from '../utils/CartStorage';

export default class FullProduct extends React.Component {

	constructor(props){
		super(props);
		this.state = {product:{},
			selectedSize: null,
			quantity: '1',
			errorSize: false,
			errorQuantity: false};

		let id = this.props.params.id;
		let loader = new Load();
		let url = "http://localhost:8081/products/" + id;
		loader.fromUrl(url)
			.then(r => this.setState({product:r}));

		this.changeSize = this.changeSize.bind(this);
		this.changeQuantity = this.changeQuantity.bind(this);
		this.addToCard = this.addToCard.bind(this);
	}



	changeSize(size){
		console.log("Hi from changeId");
		this.setState({
			selectedSize: size
		});
	}

	changeQuantity(e){
		this.setState({
	      quantity: e.currentTarget.value
	      });
	}

	addToCard(){
		if(this.state.selectedSize === null){
			console.log("selectedSize = null");
			this.setState({
				errorSize : true
			});
		}else {
			this.setState({
				errorSize : false
			});
			if(this.state.quantity === 0){
				this.setState({
					errorQuantity : true
				});
			}else{
				this.setState({
					errorQuantity : false
				});

				let obj = {name: this.state.product.name,
					quantity: this.state.quantity,
					size: this.state.selectedSize};
				CartStorage.addProduct(obj);
			}
		}		
	}

	render(){
		if(this.state.product && this.state.product.sizes){
			if(this.state.selectedSize === null){
				this.changeSize(this.state.product.sizes[0]);
			}
			return(
				<div className="content content-form">
					{this.state.errorSize ? (<div>Sorry but you need select size</div>) : (<div></div>)}
					{this.state.errorQuantity ? (<div>Sorry but you need select quantity</div>) : (<div></div>)}
					<img className="product-img-details" src={this.state.product.pathImage} alt=""/>
					<div className="right-block-info">
						<div className="label-product">{this.state.product.name}</div>
						<div className="stars right-text"><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></div>
						<div className="info price">${this.state.selectedSize.price * this.state.quantity}</div>
						<div className="product-description">{this.state.product.description}</div>
						
						<div className="order-block">
							<div className="size-block">
								
								{this.state.product.sizes.map(s => 
									<SizeLink selectSize={this.state.selectedSize} changeSize={this.changeSize} size={s} key={`size-product${s.id}`}/>)}
							</div>
							<div className="quantity-radio">
								<div className="size">Quantity:</div>
								<input type="radio" name="quantity" value="1" checked={this.state.quantity === '1'} onChange={this.changeQuantity}/><div className="num-quantity">1</div>
								<input type="radio" name="quantity" value="2" checked={this.state.quantity === '2'} onChange={this.changeQuantity}/><div className="num-quantity">2</div>
								<input type="radio" name="quantity" value="3" checked={this.state.quantity === '3'} onChange={this.changeQuantity}/><div className="num-quantity">3</div>
								<input type="radio" name="quantity" value="4" checked={this.state.quantity === '4'} onChange={this.changeQuantity}/><div className="num-quantity">4</div>
								<input type="radio" name="quantity" value="5" checked={this.state.quantity === '5'} onChange={this.changeQuantity}/><div className="num-quantity">5</div>
							</div>
							<Link to="women"><button type="submit" onClick={this.addToCard} className="attribute-btn price-btn">Add to cart</button></Link>
						</div>	
					</div>
				</div>
			
			);
		}else{
			return(<div className="loading">Loading...</div>);
		}
	}
}