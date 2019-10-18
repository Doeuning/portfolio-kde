import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import 'pages/Profile.css';

class Profile extends Component {
    render(){
        return (
            <React.Fragment>
                <CSSTransitionGroup
                    transitionName="homeTransition"
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    transitionEnter={false}
                    transitionLeave={false}
                >
                    <article id="profile">
                        <ul>
                            <li>
                                <div className="hgroup">
                                    <h2 className="tit">경력 <sub>(총 2년 5개월)</sub></h2>
                                </div>
                                <div className="content">
                                    <ul>
                                        <li>2017. 11 ~ 재직중 (2년)</li>
                                        <li>
                                            <em>뉴리버</em>
                                            <span className="position">개발팀 사원</span>
                                            <div className="task">주요직무 : 웹퍼블리싱, 자바스크립트, UI·UX, HTML5, CSS3</div>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>2017. 03 ~ 2017. 07 (5개월)</li>
                                        <li>
                                            <em>비스톤스</em>
                                            <span className="position">개발팀 사원</span>
                                            <div className="task">주요직무 : 웹퍼블리싱, 자바스크립트, UI·UX, HTML5, CSS3</div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="hgroup">
                                    <h2 className="tit">교육</h2>
                                </div>
                                <div className="content v2">
                                    <ul>
                                        <li>2016. 11 ~ 2017. 02</li>
                                        <li>
                                            <em>반응형웹 UI/UX 엔지니어 양성</em>
                                            <span className="position">한국직업전문학교</span>
                                            <div className="task">HTML, CSS, Javascript, Jquery 및 웹디자인 교육과 함께 포트폴리오 제작.</div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="hgroup">
                                    <h2 className="tit">학력</h2>
                                </div>
                                <div className="content v2">
                                    <ul>
                                        <li>2009. 03 ~ 2014. 02</li>
                                        <li>
                                            <em>한국교통대학교 충주캠퍼스</em>
                                            <span className="position">시각디자인학과</span>
                                            <div className="task">학점 : 3.5 / 4.5</div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <CSSTransitionGroup
                            transitionName="elementTransition"
                            transitionAppear={true}
                            transitionAppearTimeout={1000}
                            transitionEnter={false}
                            transitionLeave={false}
                        >
                            <Link className="btn-go" to="/portfolio">
                                Go to <br />
                                the <em>PORTFOLIO</em>
                            </Link>
                        </CSSTransitionGroup>
                    </article>
                </CSSTransitionGroup>
            </React.Fragment>
        )
    }
}

export default Profile;