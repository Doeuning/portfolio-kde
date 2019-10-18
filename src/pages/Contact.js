import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import 'pages/Contact.css';

class Contact extends Component {
    render(){
        return (
            <React.Fragment>
                <article id="contact">
                    <CSSTransitionGroup
                        transitionName="homeTransition"
                        transitionAppear={true}
                        transitionAppearTimeout={1000}
                        transitionEnter={false}
                        transitionLeave={false}
                    >
                        <dl>
                            <dt>연락처</dt>
                            <dd>doeuning@gmail.com</dd>
                            <dd><a href="tel:01065411552">010-6541-1552</a></dd>
                        </dl>
                    </CSSTransitionGroup>
                </article>
            </React.Fragment>
        )
    }
}

export default Contact;