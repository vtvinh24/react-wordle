import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Word } from './Word';

describe('Word', () => {
    it('should render letters correctly', () => {
        render(<Word word="TEST" />);
        const letters = screen.getAllByRole('listitem');
        expect(letters).toHaveLength(4);
        expect(letters[0]).toHaveTextContent('T');
        expect(letters[1]).toHaveTextContent('E');
        expect(letters[2]).toHaveTextContent('S');
        expect(letters[3]).toHaveTextContent('T');
    });

    it('should throw error when word is empty', () => {
        expect(() => render(<Word word="" />)).toThrow('Word cannot be an empty string');
    });

    it('should render with correct spacing classes', () => {
        const { container } = render(<Word word="TEST" />);
        const wordDiv = container.firstChild as HTMLElement;
        expect(wordDiv).toHaveClass('flex', 'space-x-2');
    });
});