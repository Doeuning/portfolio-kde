import React from 'react';
import './Items.css';

function Item({ title, img, description, skills, period }) {
    return (
        <React.Fragment>
            <li className="item">
                <img src={img} alt={title} />
                <div className="item-data">
                    <h3 className="item-title">{title}</h3>
                    <h4 className="item-desc">{description}</h4>
                    <p className="item-skills">{skills}</p>
                    <div className="item-period">{period}</div>
                </div>
            </li>
        </React.Fragment>
    );
}

export default Item;