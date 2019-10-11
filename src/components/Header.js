import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                    <h1 className="title"><Link to="/">Doeun Kim</Link></h1>
                    <button
                        type="button"
                        className="trg"
                        onClick={this.handleButton}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul id="gnb">
                        <li><Link to="/" onClick={this.handleButton}>Home</Link></li>
                        <li><Link to="/profile" onClick={this.handleButton}>Profile</Link></li>
                        <li><Link to="/portfolio" onClick={this.handleButton}>Portfolio</Link></li>
                        <li><Link to="/contact" onClick={this.handleButton}>Contact</Link></li>
                    </ul>
                </header>
            </React.Fragment>
        )
    }
}

export default Header;