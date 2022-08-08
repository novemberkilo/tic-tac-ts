import { useState } from 'react';
import Cell from '../cell/Cell';
import './board.css';
import { CellValue } from '../types';

type BoardMap = Array<Array<CellValue>>;

const emptyBoard: BoardMap = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
]

// TODO: winning
// TODO: minmax play the computer

function Board () {
    const [board, setBoard] = useState<BoardMap>(emptyBoard);
    const[xIsNext, setPlayer] = useState(true);

    const handleClick = function (row: number, col: number) {
        if (board[col][row] === null) {
            const newBoard = board.slice();
            newBoard[col][row] = xIsNext ? 'X' : 'O';
            setBoard(newBoard);
            setPlayer(!xIsNext);
        }
    }

    const renderCell = function (row: number, col: number) {
        return(
            <Cell
                value={board[col][row]}
                handleClick={() => handleClick(row,col)}
            />
        )
    }

    const status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    return (
        <div>
        <div className="game-board" data-testid='board-click'>
            <div className='board-row'>
                {renderCell(0,0)}
                {renderCell(1,0)}
                {renderCell(2,0)}
            </div>
            <div className='board-row'>
                {renderCell(0,1)}
                {renderCell(1,1)}
                {renderCell(2,1)}
            </div>
            <div className='board-row'>
                {renderCell(0,2)}
                {renderCell(1,2)}
                {renderCell(2,2)}
            </div>
        </div>
        <div className="game-info">
            <div>{status}</div>
        </div>
        </div>
    )
}

export default Board