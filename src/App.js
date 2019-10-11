import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Scrollbar from 'react-smooth-scrollbar';
import 'App.css';
import Header from 'components/Header';
import Home from 'pages/Home';
import Profile from 'pages/Profile';
import Portfolio from 'pages/Portfolio';
import Contact from 'pages/Contact';

function App() {
  return (
    <div className="App">
		<Header />
		<section className="container">
			<Scrollbar>
				<Route path="/" exact={true} component={Home} />
				<Route path="/profile" component={Profile} />
				<Route path="/portfolio" component={Portfolio} />
				<Route path="/contact" component={Contact} />
			</Scrollbar>
		</section>
    </div>
  );
}

export default App;
