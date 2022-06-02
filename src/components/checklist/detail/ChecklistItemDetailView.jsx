import React, { useState, useEffect } from 'react';
import './ChecklistItemDetailView.css';
import TagPill from './TagPill';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        createDescription();
    }, [activeGuideline]);
    const createDescription = () => {
        let descriptionElement = document
            .createRange()
            .createContextualFragment(activeGuideline.description);
        return descriptionElement;
    };
    return (
        <div className="card-detail-view">
            <section className="page-header">
                <h3>{activeGuideline.name}</h3>
            </section>
            <div className="page-main">
                <section id="description">
                    {activeGuideline.description}
                </section>
                <section id="link">
                    <a href={activeGuideline.URL}>
                        Mer om denna riktlinje <span className="space"></span>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </section>
                <section>
                    <h3>Principer:</h3>
                    {principlesList.map((principle, index) => (
                        <TagPill key={index} tag={principle} />
                    ))}
                </section>
                <section>
                    <h3>Taggar:</h3>
                    {tagsList.map((tag, index) => (
                        <TagPill key={index} tag={tag} />
                    ))}
                </section>
                <section>
                    <span>Den här riktlinjen är implementerad</span>
                    <input
                        type="checkbox"
                        name=""
                        id=""
                        value={activeGuideline.status}
                    />
                </section>
            </div>
        </div>
    );
};
export default ChecklistItemDetailView;
