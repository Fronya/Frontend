'use strict';

export default class CartStorage {

	static countProduct(){
		var cartString = localStorage.getItem('cart');
		if(cartString === null){
			console.log("cart is null");
			return 0;
		}
		let cart = JSON.parse(cartString);
		if(!Array.isArray(cart)){
			return 0;
		}
		return cart.length;
	}


	static addProduct(product){
		console.log("It's addProduct");
		let cart = [];
		let cartString = localStorage.getItem('cart');

		if(cartString !== null){
			let oldCart = JSON.parse(cartString);
			if(Array.isArray(oldCart)){
				
				cart = oldCart;
			}else{
				localStorage.setItem('old cart', "cart isn't array");
			}
		}

		cart.push(product);
		cartString = JSON.stringify(cart);
		localStorage.setItem('cart', cartString);
	}


	static deleteProduct(product){
		let cartString = localStorage.getItem('cart');
		if(cartString !== null){
			
			let cart = JSON.parse(cartString);
			if(Array.isArray(cart)){
				let index = this.equalsObj(cart, product);
				if(index != -1){
					localStorage.setItem('old cart', "product is find");
					cart.splice(index, 1);
					let cartString = JSON.stringify(cart);
					localStorage.setItem('cart', cartString);
				}else{
					localStorage.setItem('old cart', "product isn't find " + JSON.stringify(product));
				}
			}
		}
	}

	static equalsObj(array, obj){
		var findObj;
		for (var i = 0; i < array.length; i++) {
			if(JSON.stringify(array[i]) === JSON.stringify(obj)){
				findObj = array[i];
				break;
			}
		}
		return array.indexOf(findObj);
	}

	static getProducts(){
		let cartString = localStorage.getItem('cart');
		if(cartString !== null){
			return JSON.parse(cartString);
		}else{
			return [];
		}
	}

	static deleteProducts(){
		localStorage.setItem('cart', null);
	}
}