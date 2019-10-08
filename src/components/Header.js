import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import 'components/Header.css';

class Header extends Component {
    state = {
        buttonToggle: false
    }
    handleButton = () => {
        this.setState({
            buttonToggle: !this.state.buttonToggle
        })
    }
    render(){
        const { buttonToggle } = this.state;
        return (
            <React.Fragment>
                <header
                    id="header"
                    className={ buttonToggle ? 'on' : null}
                >
                    <h1 className="title">Doeun Kim</h1>
                    <button
                        type="button"
                        class="trg"
                        onClick={this.handleButton}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul id="gnb">
                        <li><Link to="/" onClick={this.handleButton}>Home</Link></li>
                        <li><Link to="/profile" onClick={this.handleButton}>Profile</Link></li>
                        <li><Link to="/resume" onClick={this.handleButton}>Resume</Link></li>
                        <li><Link to="/portfolio" onClick={this.handleButton}>Portfolio</Link></li>
                        <li><Link to="/contact" onClick={this.handleButton}>Contact</Link></li>
                    </ul>
                </header>
            </React.Fragment>
        )
    }
}

export default Header;