import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Cell from '../Cell'

describe('Cell', () => {
    describe('default setup', () => {
        it('is blank', () => {
            const clickHandler = jest.fn();
            render(<Cell handleClick={clickHandler} />);
            expect(screen.getByTestId('cell-click')).toBeEmptyDOMElement()
        });
    });
    describe('clicking', () => {
        it('calls its click handler when clicked', () => {
            const clickHandler = jest.fn();
            render(<Cell handleClick={clickHandler}/>)
            fireEvent.click(screen.getByTestId('cell-click'));
            expect(clickHandler).toHaveBeenCalled();
        });
        it('shows an X', () => {
            render(<Cell value='X' />)
            expect(screen.getByTestId('cell-click')).toHaveTextContent('X')
        });
        it('shows a O', () => {
            render(<Cell value='O' />)
            expect(screen.getByTestId('cell-click')).toHaveTextContent('O')
        });
    })
})
