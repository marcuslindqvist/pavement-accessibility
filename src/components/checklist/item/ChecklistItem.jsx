import React from 'react';
import './ChecklistItem.css';
const ChecklistItem = ({ cardType, guidelineItem }) => {
    return (
        <div className={'checklist-item ' + cardType}>
            {cardType === 'card-sm' ? (
                <h4 className="short">{guidelineItem.shortName}</h4>
            ) : (
                <h4 className="long">{guidelineItem.name}</h4>
            )}
        </div>
    );
};
export default ChecklistItem;
