import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Board from '../Board'

test("renders", () => {
    render(<Board />)
})

describe("cells", () => {
    it("starts out with empty cells", () => {
        render(<Board />);
        expect(screen.queryAllByText('X')).toHaveLength(0);
        expect(screen.queryAllByText('O')).toHaveLength(0);
        expect(screen.queryAllByTestId('cell-click')).toHaveLength(9);
    })
})