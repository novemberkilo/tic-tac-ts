import './cell.css';

interface Props {
    value : string;
    handleClick: () => void;        
    }

Cell.defaultProps = {
    value: '',
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