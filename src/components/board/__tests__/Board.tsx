import { render, fireEvent, screen, waitFor } from '@testing-library/react';
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
    it("sets a cell to 'X' when it is clicked. Clicking twice doesn't make any difference", () => {
        render(<Board />);
        fireEvent.click(screen.getAllByTestId('cell-click')[0]);
        expect(screen.queryAllByTestId('cell-click')).toHaveLength(9);
        expect(screen.queryAllByText('O')).toHaveLength(0);
        expect(screen.queryAllByText('X')).toHaveLength(1);
        fireEvent.click(screen.getAllByTestId('cell-click')[0]);
        expect(screen.queryAllByText('O')).toHaveLength(0);
        expect(screen.queryAllByText('X')).toHaveLength(1);
    })
})

describe("player", () => {
    it("starts out with player X then switches to player O", async () => {
        render(<Board />);
        expect(screen.queryAllByText('Next player: X')).toHaveLength(1);
        
        fireEvent.click(screen.getAllByTestId('cell-click')[5]);
        expect(screen.queryAllByText('Next player: X')).toHaveLength(0);
        expect(screen.queryAllByText('Next player: O')).toHaveLength(1);
        })
    })