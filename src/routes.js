import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout.jsx';
import ListProduct from './components/ListProduct.jsx';
import FullProduct from './components/FullProduct.jsx';
import Cart from './components/Cart.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import ProductBlock from './components/ProductBlock.jsx';
import Orders from './components/Orders.jsx';


class WomenProduct extends React.Component {
	render(){
		return (<ProductBlock type="2"/>);
	}
}

class MenProduct extends React.Component {
	render(){
		return (<ProductBlock type="1"/>);
	}
}

class UnisexProduct extends React.Component {
	render(){
		return (<ProductBlock type="3"/>);
	}
}

const routes = (
	<Route>
	  <Route component={Layout}>
	  	<Route component={ListProduct}>
	  		<Route path="/women" component={WomenProduct}/>
	  		<Route path="/men" component={MenProduct}/>
	  		<Route path="/unisex" component={UnisexProduct}/>
	  	</Route>
	  	<Route path="products/:id" component={FullProduct} />
	  	<Route path="cart" component={Cart} />
	  	<Route path="orders" component={Orders}/>
	  </Route>
	  <Route path="/login" component={Login}/>
	  <Route path="/register" component={Register}/>
  </Route>
);

export default routes;
