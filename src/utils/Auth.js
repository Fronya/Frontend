'use strict';

let token = null;
export default class Auth {
	static isUserAuthenticated(){
		if(token == null){
			return false;
		}
		return token;
	}

	static getUser(){
		return localStorage.getItem("userId");
	}

	static setUser(id){
		let userId = localStorage.getItem("userId");
		localStorage.setItem("userId", id);
	}

	static setToken(value){
		token = value;
	}

	static getToken(){
		return token;
	}

	static logout(){
		localStorage.setItem("userId", null);
		token = null;
	}

	static isAdmin(){
		if(token != null && localStorage.getItem("userId")<0){
			return true;
		}else{
			return false;
		}
	}
}