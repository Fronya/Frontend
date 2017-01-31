import Auth from '../utils/Auth';
import CartStorage from '../utils/CartStorage';

export default class Load {

  fromUrl(url){
    let result = new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open('GET', url);
      request.onreadystatechange  = () =>{
        let raw = request.responseText;
        let objectified = JSON.parse(raw);
        resolve(objectified);
      };
      request.send();
    });

    return result;
  }

  fromUrlPost(url, obj){
     let body = JSON.stringify(obj);
     let result = new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open('POST', url);
        request.setRequestHeader('Content-Type', 'application/json');
        request.onreadystatechange  = () =>{
          if(request.status == 200){
            let raw = request.responseText;
            let objectified = JSON.parse(raw);
            resolve(objectified);
          }else{
            resolve(null);
          }
        };
        request.send(body);
    });

    return result;
  }

  sendOrder(){
    let cart = CartStorage.getProducts();
    let orders= [];
    for(let i = 0; i<cart.length; i++){
      let obj = {
        idSizeProduct: null,
        nameProduct: null,
        sizeValue: null,
        count: null
      };
      obj.idSizeProduct = cart[i].size.id;
      obj.nameProduct = cart[i].name;
      obj.sizeValue = cart[i].size.value;
      obj.count = cart[i].quantity;
      orders.push(obj);
    }
    let objOrder = {id:null, orders:orders};
    let body = JSON.stringify(objOrder);
    let userId = localStorage.getItem('userId');
    let url = "http://localhost:8081/customers/"+userId+"/orders";
    let result = new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open('POST', url);
      request.setRequestHeader('Content-Type', 'application/json');
      request.setRequestHeader('Auth-Token', Auth.getToken());
      request.setRequestHeader('Id_User', Auth.getUser());
      request.onreadystatechange  = () =>{
          if(request.status == 200){
            let raw = request.responseText;
            let objectified = JSON.parse(raw);
            resolve(objectified);
          }else{
            resolve(null);
          }
        };
        request.send(body);
    });

    return result;
  }


  logout(){
    let url = "http://localhost:8081/customers/logout";
    let result = new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open('DELETE', url);
      request.setRequestHeader('Auth-Token', Auth.getToken());
      request.setRequestHeader('Id_User', Auth.getUser());
      request.onreadystatechange  = () =>{
          if(request.status == 200){
            let raw = request.responseText;
            let objectified = JSON.parse(raw);
            resolve(objectified);
          }else{
            resolve(null);
          }
        };
        request.send();
    });

    return result;
  }


  getOrders(){
    let url = "http://localhost:8081/customers/orders";
    let result = new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open('GET', url);
      request.setRequestHeader('Auth-Token', Auth.getToken());
      request.setRequestHeader('Id_User', Auth.getUser());
      request.onreadystatechange  = () =>{
          if(request.status == 200){
            let raw = request.responseText;
            let objectified = JSON.parse(raw);
            resolve(objectified);
          }else{
            resolve(null);
          }
        };
        request.send();
    });

    return result;
  }
}