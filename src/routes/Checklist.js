import React, { useEffect, useState } from 'react';
import ChecklistItem from '../components/checklist/item/ChecklistItem';
import ChecklistItemDetailView from '../components/checklist/detail/ChecklistItemDetailView';
import './Checklist.css';
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
        <div>
            <div>
                <button onClick={changeCardSize} data-name="card-sm">
                    small
                </button>
                <button onClick={changeCardSize} data-name="card-md">
                    big
                </button>
            </div>
            {listStyle === 'row' ? (
                <div>
                    <button
                        onClick={() => changeActiveItem(activeIndex - 1)}
                        disabled={activeIndex === 0}
                    >
                        back
                    </button>
                    <button
                        onClick={() => changeActiveItem(activeIndex + 1)}
                        disabled={activeIndex === guidelines.length - 1}
                    >
                        forward
                    </button>
                </div>
            ) : (
                <div></div>
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
                        />
                    </div>
                ))
            ) : (
                <ChecklistItemDetailView activeGuideline={clickedGuideline} />
            )}
        </div>
    );
}
