import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'pages/Home.css';

class Home extends Component {
    render(){
        return (
            <React.Fragment>
                <article id="home">
                    <div className="greeting">
                        <p className="head">
                            안녕하세요.<br />
                            프론트엔드 개발자<br />
                            김도은입니다.
                        </p>
                        <div className="body">
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>javascript</li>
                                <li>React</li>
                                <li>Photoshop</li>
                                <li>Illustrator</li>
                            </ul>
                            <p className="desc">
                                등을 다루는<br />
                                감각있는 개발자입니다.
                            </p>
                        </div>
                    </div>
                    <div className="img">
                        <img src="/images/profile.jpg" alt="Kim Doeun"/>
                        <Link className="btn-go" to="/profile">
                            Go to <br />
                            the <em>PROFILE</em>
                        </Link>
                    </div>
                </article>
            </React.Fragment>
        )
    }
}

export default Home;