import { describe, it, expect } from 'vitest';
import { useLetter } from './useLetter';
import { KeySymbol } from '../enum/Letter';

describe('useLetter', () => {
    it('should return the symbol for a special key', () => {
        const specialKey = 'Enter';
        KeySymbol[specialKey] = '⏎'; // Mocking the KeySymbol enum
        const result = useLetter(specialKey);
        expect(result).toBe('⏎');
    });

    it('should return the uppercase letter for a regular letter', () => {
        const letter = 'a';
        const result = useLetter(letter);
        expect(result).toBe('A');
    });

    it('should return the uppercase letter for an uppercase letter', () => {
        const letter = 'B';
        const result = useLetter(letter);
        expect(result).toBe('B');
    });

    it('should return the input for an empty string', () => {
        const letter = '';
        const result = useLetter(letter);
        expect(result).toBe('⚠');
    });

    it('should return the input for a non-alphabetic character', () => {
        const letter = '1';
        const result = useLetter(letter);
        expect(result).toBe('1');
    });
});