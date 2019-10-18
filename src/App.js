import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import 'App.css';
import Header from 'components/Header';
import Home from 'pages/Home';
import Profile from 'pages/Profile';
import Portfolio from 'pages/Portfolio';
import Contact from 'pages/Contact';

class App extends Component {
	render(){
		return (
			<ScrollToTop>
				<div className="App">
					<Header />
					<section className="container">
						<Route path="/" exact={true} component={Home} />
						<Route path="/profile" component={Profile} />
						<Route path="/portfolio" component={Portfolio} />
						<Route path="/contact" component={Contact} />
					</section>
				</div>
			</ScrollToTop>
		);
	}
}

export default App;
