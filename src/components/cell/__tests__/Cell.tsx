import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Cell from '../Cell'

describe('Cell', () => {
    describe('default setup', () => {
        it('is blank', () => {
            render(<Cell />);
            expect(screen.getByTestId('cell-click')).toBeEmptyDOMElement()
        });
    });
    describe('clicking', () => {
        it('shows an X', () => {
            render(<Cell value='X' />)
            fireEvent.click(screen.getByTestId('cell-click'));
            expect(screen.getByTestId('cell-click')).toHaveTextContent('X')
        });
        it('shows a O', () => {
            render(<Cell value='O' />)
            fireEvent.click(screen.getByTestId('cell-click'));
            expect(screen.getByTestId('cell-click')).toHaveTextContent('O')
        });
    })
})
