import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'App.css';
import Header from 'components/Header';
import Home from 'pages/Home';
import Profile from 'pages/Profile';
import Portfolio from 'pages/Portfolio';
import Resume from 'pages/Resume';
import Contact from 'pages/Contact';

function App() {
  return (
    <div className="App">
		<Header />
		<section className="container">
			<Route path="/" exact={true} component={Home} />
			<Route path="/profile" component={Profile} />
			<Route path="/resume" component={Resume} />
			<Route path="/portfolio" component={Portfolio} />
			<Route path="/contact" component={Contact} />
		</section>
    </div>
  );
}

export default App;
