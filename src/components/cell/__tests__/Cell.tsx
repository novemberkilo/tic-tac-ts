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
        describe('player X', () => {
            it('shows an X', () => {
                render(<Cell player='X' />)
                fireEvent.click(screen.getByTestId('cell-click'));
                expect(screen.getByTestId('cell-click')).toHaveTextContent('X')
            })
        })
    })
})