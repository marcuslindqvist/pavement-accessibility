import React from 'react';
import './ChecklistItem.css';
const ChecklistItem = (props) => {
    return (
        <div className={'checklist-item ' + props.cardType}>
            <h3>{props.guidelineItem.name}</h3>
            <p>{props.guidelineItem.description}</p>
        </div>
    );
};
export default ChecklistItem;
