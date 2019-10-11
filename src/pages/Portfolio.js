import React, { Component } from 'react';
import axios from 'axios';
import Item from 'pages/Items';
import 'pages/Portfolio.css';
import data from 'data/Data.json';

class Portfolio extends Component {
    state = {
        isLoading: true,
        items: []
    }

    getData = async () => {
        const item = data;
        console.log(item)
    }

    componentDidMount() {
        this.getData();
    };

    render(){
        const { isLoading, items } = this.state;
        return (
            <React.Fragment>
                <article id="portfolio">
                    {isLoading ? (
                        <div className="loader">
                            <span className="text">Loading...</span>
                        </div>
                    ) : (
                        <ul>
                            {items.map(items => (
                                <Item
                                    key={items.id}
                                    title={items.title}
                                    img={items.img}
                                    description={items.description}
                                    skills={items.skills}
                                    period={items.period}
                                />
                            ))}
                        </ul>
                    )
                    }
                </article>
            </React.Fragment>
        )
    }
}

export default Portfolio;