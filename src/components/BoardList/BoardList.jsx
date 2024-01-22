import { useState } from 'react';

import './BoardList.scss';

import { boardData } from 'data';

export function BoardList() {
    const [boards, setBoards] = useState(boardData);
    const [currentBoard, setCurrentBoard] = useState(null);
    const [currentItem, setCurrentItem] = useState(null);

    function dragStartHandler(e, board, item) {
        setCurrentBoard(board);
        setCurrentItem(item);
    }

    function dragLeaveHandler(e) {
        e.target.style.boxShadow = 'none';
    }

    function dragEndHandler(e) {
        e.target.style.boxShadow = 'none';
    }

    function dragOverHandler(e) {
        e.preventDefault();
        if (e.target.className === 'item') {
            e.target.style.boxShadow = '0 4px 3px gray';
        }
    }

    function dropHandler(e, board, item) {
        e.preventDefault();
        e.target.style.boxShadow = 'none';
        const currentIndex = currentBoard.items.indexOf(currentItem);
        currentBoard.items.splice(currentIndex, 1);

        const dropIndex = board.items.indexOf(item);
        board.items.splice(dropIndex + 1, 0, currentItem);

        setBoards(
            boards.map(b => {
                if (b.id === board.id) {
                    return board;
                }

                if (b.id === currentBoard.id) {
                    return currentBoard;
                }

                return b;
            })
        );
    }

    function dropCardHandler(e, board) {
        board.items.push(currentItem);
        const currentIndex = currentBoard.items.indexOf(currentItem);
        currentBoard.items.splice(currentIndex, 1);

        setBoards(
            boards.map(b => {
                if (b.id === board.id) {
                    return board;
                }

                if (b.id === currentBoard.id) {
                    return currentBoard;
                }

                return b;
            })
        );
    }

    // function compareCards(a, b) {
    //     if (a.order > b.order) {
    //         return 1;
    //     } else if (a.order < b.order) {
    //         return -1;
    //     }
    // }

    return (
        <ul className="app">
            {boards.map(board => (
                <li
                    onDragOver={e => dragOverHandler(e)}
                    onDrop={e => dropCardHandler(e, board)}
                    className="board"
                    key={board.id}
                >
                    <h2 className="board__title">{board.title}</h2>
                    <ul className="item-wrapper">
                        {board.items.map(item => (
                            <li
                                onDragStart={e =>
                                    dragStartHandler(e, board, item)
                                }
                                onDragLeave={e => dragLeaveHandler(e)}
                                onDragEnd={e => dragEndHandler(e)}
                                onDragOver={e => dragOverHandler(e)}
                                onDrop={e => dropHandler(e, board, item)}
                                draggable={true}
                                className="item"
                                key={item.id}
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
}
