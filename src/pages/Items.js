import React from 'react';
import './Items.css';

function Item({ title, img, description, skills, period, link }) {
    return (
        <React.Fragment>
            {link == '#self' ? (
                <li className="item nolink">
                    <div className="item-img">
                        <img src={img} alt={title} />
                    </div>
                    <div className="item-data">
                        <h3 className="item-title">{title}</h3>
                        <h4 className="item-desc">{description}</h4>
                        <p className="item-skills">{skills}</p>
                        <div className="item-period">{period}</div>
                    </div>
                </li>
                ) : (
                <li className="item">
                    <a href={link} target="_blank">
                        <div className="item-img">
                            <img src={img} alt={title} />
                        </div>
                        <div className="item-data">
                            <h3 className="item-title">{title}</h3>
                            <h4 className="item-desc">{description}</h4>
                            <p className="item-skills">{skills}</p>
                            <div className="item-period">{period}</div>
                        </div>
                    </a>
                </li>
                )}
        </React.Fragment>
    );
}

export default Item;