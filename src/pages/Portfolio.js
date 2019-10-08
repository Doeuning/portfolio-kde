import React, { Component } from 'react';
import axios from 'axios';
import 'pages/Portfolio.css';

class Portfolio extends Component {
    state = {
        items: []
    }
    getData = async () => {
        const { data: { data: { items } } } = await axios.get('portfolioData.json');
        this.setState({ items });
    }
    render(){
        return (
            <React.Fragment>
                <article id="portfolio">
                    <h2 className="page-tit">Portfolio</h2>
                    <ul>

                    </ul>
                </article>
            </React.Fragment>
        )
    }
}

export default Portfolio;