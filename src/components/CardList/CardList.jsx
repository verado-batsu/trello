import { useState } from 'react';

import './CardList.scss';

import { cardData } from 'data';

export function CardList() {
    const [cardList, setCardList] = useState(cardData);
    const [currentCard, setCurrentCard] = useState(null);

    function dragStartHandler(e, card) {
        setCurrentCard(card);
    }

    function dragEndHandler(e) {
        e.target.style.background = 'white';
    }

    function dragOverHandler(e) {
        e.preventDefault();
        e.target.style.background = 'lightgrey';
    }

    function dropHandler(e, card) {
        e.preventDefault();
        e.target.style.background = 'white';
        setCardList(
            cardList.map(c => {
                if (c.id === card.id) {
                    return { ...c, order: currentCard.order };
                }
                if (c.id === currentCard.id) {
                    return { ...c, order: card.order };
                }
                return c;
            })
        );
    }

    function compareCards(a, b) {
        if (a.order > b.order) {
            return 1;
        } else if (a.order < b.order) {
            return -1;
        }
    }

    return (
        <div className="app">
            {cardList.sort(compareCards).map(card => (
                <li
                    onDragStart={e => dragStartHandler(e, card)}
                    onDragLeave={e => dragEndHandler(e)}
                    onDragEnd={e => dragEndHandler(e)}
                    onDragOver={e => dragOverHandler(e)}
                    onDrop={e => dropHandler(e, card)}
                    draggable={true}
                    className="card"
                    key={card.id}
                >
                    {card.text}
                </li>
            ))}
        </div>
    );
}
