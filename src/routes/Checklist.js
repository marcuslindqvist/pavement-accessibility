import React, { useEffect, useState } from 'react';
import ChecklistItem from '../components/checklist/item/ChecklistItem';
import ChecklistItemDetailView from '../components/checklist/detail/ChecklistItemDetailView';
import './Checklist.css';
import {
    faArrowRight,
    faArrowLeft,
    faMinimize,
    faMaximize,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Checklist() {
    const [guidelines, setGuidelines] = useState([]);
    const [serverStatus, setServerStatus] = useState(true);
    const [cardSize, setCardSize] = useState('card-sm');
    const [listStyle, setListStyle] = useState('col');
    const [activeIndex, setActiveIndex] = useState(0);
    const [clickedGuideline, setClickedGuideline] = useState({});

    useEffect(() => {
        async function getGuidelines() {
            try {
                const response = await fetch('/guidelines', { method: 'GET' });
                const data = await response.json();
                setGuidelines(data);
            } catch (error) {
                setServerStatus(false);
                console.log(serverStatus);
            }
        }
        getGuidelines();
    }, []);

    function changeCardSize(event) {
        const size = event.target.dataset.name;
        setListStyle('col');
        setCardSize(size);
        if (size === 'card-lg') {
            setListStyle('row');
        }
    }

    function changeActiveItem(clickedIndex) {
        setActiveIndex(clickedIndex);
        setClickedGuideline(guidelines[clickedIndex]);
        setListStyle('row');
    }

    return (
        <div className="checklist">
            <div className="page-header">
                <h1 data-name="card-sm" onClick={changeCardSize}>
                    {listStyle === 'col'
                        ? 'Checklista'
                        : `Nr ${activeIndex + 1}`}
                </h1>
            </div>
            <div className="checklist-container page-main">
                {listStyle === 'row' ? (
                    <div className="arrow-btns">
                        <button
                            onClick={() => changeActiveItem(activeIndex - 1)}
                            disabled={activeIndex === 0}
                            className="btn"
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                            <span> </span>
                            Föregående
                        </button>

                        <button
                            onClick={() => changeActiveItem(activeIndex + 1)}
                            disabled={activeIndex === guidelines.length - 1}
                            className="btn"
                        >
                            Nästa
                            <span> </span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                ) : (
                    <div>
                        <button
                            onClick={changeCardSize}
                            data-name="card-sm"
                            className="btn"
                        >
                            <FontAwesomeIcon icon={faMinimize} />
                            <span> </span>
                            mindre
                        </button>
                        <button
                            onClick={changeCardSize}
                            data-name="card-md"
                            className="btn"
                        >
                            <FontAwesomeIcon icon={faMaximize} />
                            <span> </span>
                            större
                        </button>
                    </div>
                )}

                {listStyle === 'col' ? (
                    guidelines.map((guideline, index) => (
                        <div
                            key={guideline.id}
                            onClick={() => changeActiveItem(index)}
                        >
                            <ChecklistItem
                                guidelineItem={guideline}
                                cardType={cardSize}
                                index={index}
                            />
                        </div>
                    ))
                ) : (
                    <div>
                        <ChecklistItemDetailView
                            activeGuideline={clickedGuideline}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
