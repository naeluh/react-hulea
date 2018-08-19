//============//
// Content.js //
//============//
import React from 'react';
import { Route } from "react-router-dom";
import Home from '../Home'
import Work from '../Work'
import About from '../About'
import Form from '../Form'
import Project from '../Project'

class Content extends React.Component {
	render() {

		const { items } = this.props.items;
		return (
			<div>
				<Route exact path="/" component={Home}></Route>
				<Route path="/work" component={Work} items={items}></Route>
				<Route path="/contact" component={Form}></Route>
				<Route path="/about" component={About}></Route>
				<Route path="/project/:id" component={Project}></Route>
			</div>
		)
	}
}

export default Content;