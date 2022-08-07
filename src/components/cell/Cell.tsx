import React, { useState } from 'react'; 
import './cell.css';

interface Props {
    player : string
}
Cell.defaultProps = {
    player: ''
}
function Cell({ player }: Props) {
    const [value, setValue] = useState('');

    const clickHandler = (player: string) => {
        if (value !== '') return;
        
        if (player === 'X') setValue('X'); else setValue('O')
    }
    return(
        <div className='cell' onClick={() => clickHandler(player)}
            data-testid='cell-click'>
            {value}
        </div>
    );
}

export default Cell;