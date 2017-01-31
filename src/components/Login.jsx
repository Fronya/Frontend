import React from 'react';
import { Link, browserHistory } from 'react-router';
import Load from '../utils/load';
import Auth from '../utils/Auth';

export default class Login extends React.Component {

	constructor(props){
		super(props);
		this.state = {email: "",
			password: "",
			errorSubmit: false,
			token: null};

		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
		this.handleButton = this.handleButton.bind(this);
		this.reciveToken = this.reciveToken.bind(this);
	}

	handleChangeEmail(event){
		this.setState({email: event.target.value});
	}

	handleChangePassword(event){
		this.setState({password: event.target.value});
	}

	handleButton(event){
		let obj = {
			email: this.state.email,
			password: this.state.password
		};
		console.log(JSON.stringify(obj));
		let loader = new Load();
		loader.fromUrlPost("http://localhost:8081/customers/login", obj)
			.then(r => this.reciveToken(r));
	}

	reciveToken(obj){
		if(obj !== null && typeof obj==='object' && "token" in obj){
			Auth.setToken(obj.token);
			console.log("id = " + obj.id);
			Auth.setUser(obj.id);
			browserHistory.goBack();
		}else{
			this.setState({errorSubmit: true});
		}
	}

	render(){
		return(
			<div className="all-content">
				<div className="content-form content-col-1">
					<form action="" className={'register-form-style ${this.state.errorSubmit ? register-form-error : register-form}'}>
					{this.state.errorSubmit ? (
						<div className="field">Error submit. Check your email and password.</div>
					):(<div></div>)}
						<div className="field">
							<input type="text" id="email" value={this.state.email} onChange={this.handleChangeEmail}/>
							<label for="email">Email</label>
						</div>
						<div className="field">
							<input type="password" id="password" value={this.state.password} onChange={this.handleChangePassword}/>
							<label for="password">Password</label>
						</div>
						<div className="field">
							<input type="checkbox" id="checkbox"/>

							<label for="checkbox">Remember me</label>
						</div>
						<div className="field">
							<button type="button" className="attribute-btn price-btn main-btn" onClick={this.handleButton}>Login</button>
						</div>
						<div className="field">
							<Link to="/register"><button className="attribute-btn price-btn">Register</button></Link>
							<Link to="/"><button className="attribute-btn price-btn">To Index Page</button></Link>
						</div>
					</form>
				</div>
			</div>
		);
	}
}