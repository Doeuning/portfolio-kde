import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import axios from 'axios';
import Item from 'pages/Items';
import 'pages/Portfolio.css';

class Portfolio extends Component {
    state = {
        isLoading: true,
        items: []
    }

    getData = async () => {
        const { data } = await axios.get('https://codepen.io/doeuning/pen/poobXzM.js');
        this.setState({ items: data, isLoading: false })
    }

    componentDidMount() {
        this.getData();
    };

    render(){
        const { isLoading, items } = this.state;
        return (
            <React.Fragment>
                <CSSTransitionGroup
                    transitionName="homeTransition"
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    transitionEnter={false}
                    transitionLeave={false}
                >
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
                                        link={items.link}
                                    />
                                ))}
                            </ul>
                        )
                        }
                        <CSSTransitionGroup
                            transitionName="elementTransition"
                            transitionAppear={true}
                            transitionAppearTimeout={1000}
                            transitionEnter={false}
                            transitionLeave={false}
                        >
                            <Link className="btn-go" to="/contact">
                                Go to <br />
                                the <em>CONTACT</em>
                            </Link>
                        </CSSTransitionGroup>
                    </article>
                </CSSTransitionGroup>
            </React.Fragment>
        )
    }
}

export default Portfolio;