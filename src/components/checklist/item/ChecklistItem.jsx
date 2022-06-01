import React from 'react';
import './ChecklistItem.css';
const ChecklistItem = ({ cardType, guidelineItem, index }) => {
    return (
        <div className={'checklist-item ' + cardType}>
            <span className="h5 item-number">{index + 1}</span>
            {cardType === 'card-sm' ? (
                <span className="short h5">{guidelineItem.shortName}</span>
            ) : (
                <span className="long h5">{guidelineItem.name}</span>
            )}
        </div>
    );
};
export default ChecklistItem;
