import React, { useState } from 'react'; 
import './cell.css';

interface Props {
    value : string
}
Cell.defaultProps = {
    value: ''
}
function Cell({ value }: Props) {
    const clickHandler = (value: string) => {
        if (value !== '') return;
        
        // if (value === 'X') setValue('X'); else setValue('O')
    }
    return(
        <div className='cell' onClick={() => clickHandler(value)}
            data-testid='cell-click'>
            {value}
        </div>
    );
}

export default Cell;