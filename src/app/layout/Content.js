//============//
// Content.js //
//============//
import React from 'react';
import { Route, Link } from "react-router-dom";
import data from '../../data/data.json'

class Content extends React.Component {

	createProjects = (d) => {
		let links = []
		for (let index = 0; index < d.work.length; index++) {
			let value = d.work[index];
			links.push(
				<section className="offset0"><Link to={`pages?webpage=${index}`} title="#" alt="#">
					<div className="imgHero" style={{ backgroundImage: `
					url(./data/${value.img})` }}></div>
					<h2 className="imgTitle">{value.title}</h2></Link>
				</section>
			)
		}
		return links
	}

	Child = ({ match }) => (
		<div className="background-content" >
			<section className="offset60">
				<h1 id="title">{match.params.id}</h1>
			</section>
			<section className="offset60">
				<p id="description" >Hello you have arrived at the website of Nick Hulea !</p>
				<p>Samples of my work can be found <Link to="work" title="work" alt="work">here .</Link></p>
				<p>If you would like to contact me or if you have any questions click <Link to="contact" title="contact" alt="contact" >here .</Link></p>
			</section>
			<div id="wrap"><div id="block"></div></div>
		</div>
	);

	Work = ({ match }) => (
		<div>
			{this.createProjects(data)}
		</div>
	);


	render() {
		return (
			<div>
				<Route path="/work" component={this.Work}></Route>
				<Route path="/:id" component={this.Child}></Route>
				<Route path="/" component={this.Child}></Route>
			</div>
		)
	}
}
export default Content