import React from 'react';
import { Link } from 'react-router';

export default class SizeLink extends React.Component {
	constructor(props) {
	    super(props);
	}

	handleClick(){
		/*if (typeof this.props.changeId === 'function') {
			console.log("You win!!!!");
			this.props.changeId(this.props.size.id);
		}*/
		if (typeof this.props.changeSize === 'function') {
			console.log("You win!!!!");
			this.props.changeSize(this.props.size);
		}
	} 

	render(){
		let selected = (this.props.selectSize === this.props.size);
		console.log(selected);
		return(
			<button type="button" onClick={this.handleClick.bind(this)} className={selected ? 'size-active' : ''}>
				<div className="size">{this.props.size.value}</div>
				<div className="price-small">${this.props.size.price}</div>
			</button>
		)
	}
}