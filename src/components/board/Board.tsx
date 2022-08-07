import { useState } from 'react';
import Cell from '../cell/Cell';
import './board.css';
import { CellValue } from '../types';

type BoardMap = Array<Array<CellValue>>;

const emptyBoard: BoardMap = Array(3).fill(Array(3).fill(null));

function Board () {
    const [board, setBoard] = useState<BoardMap>(emptyBoard);

    const renderCell = function (x: number, y: number) {
        return(<Cell />)
    }
    
    return (
        <div data-testid='board-click'>
            <div className='board-row'>
                {renderCell(1,1)}
                {renderCell(2,1)}
                {renderCell(3,1)}
            </div>
            <div className='board-row'>
                {renderCell(2,1)}
                {renderCell(2,2)}
                {renderCell(2,3)}
            </div>
            <div className='board-row'>
                {renderCell(3,1)}
                {renderCell(3,2)}
                {renderCell(3,3)}
            </div>
        </div>
    )
}

export default Board