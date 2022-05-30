import React, { useState, useEffect } from 'react';
import './ChecklistItemDetailView.css';
const ChecklistItemDetailView = ({ activeGuideline }) => {
    const [principlesList, SetPrinciplesList] = useState([]);
    const [tagsList, setTagsList] = useState([]);

    useEffect(() => {
        function createPrincipleArray() {
            const principles = activeGuideline.principles.split(',');
            SetPrinciplesList(principles);
        }

        function createTagsArray() {
            const tags = activeGuideline.tags.split(',');
            setTagsList(tags);
        }
        createPrincipleArray();
        createTagsArray();
    }, []);

    return (
        <div>
            <h2>{activeGuideline.name}</h2>
            <p>{activeGuideline.description}</p>
            <div>
                <h3>Principer:</h3>
                {principlesList.map((principle, index) => (
                    <span key={index}>{principle}</span>
                ))}
            </div>
            <div>
                <h3>Taggar:</h3>
                {tagsList.map((tag, index) => (
                    <span key={index}>{tag}</span>
                ))}
            </div>
        </div>
    );
};
export default ChecklistItemDetailView;
