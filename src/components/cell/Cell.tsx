import './cell.css';

interface Props {
    value : string | null;
    handleClick: () => void;        
    }

Cell.defaultProps = {
    value: null,
    handleClick: () => {}
}

function Cell({ value, handleClick }: Props) {
    return(
        <div className='cell' onClick={handleClick}
            data-testid='cell-click'>
            {value}
        </div>
    );
}

export default Cell;