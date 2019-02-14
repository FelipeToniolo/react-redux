import expect from 'expect';
import { authorsFormattedForDropdown } from './selectors';

describe('Author Selectors', () => {
    describe('authorsFormattedForDropdown', () => {
        it('should return author data formatted for use in a dropdown', () => {
            const authors = [
                { id: 'cory-house', firstName: 'Cory', lastName: 'House' },
                { id: 'scott-allen', firstName: 'Scott', lastName: 'Allen' }
            ];

            const expected = [
                { value: 'cory-house', text: 'CoryHouse' },
                { value: 'scott-allen', text: 'ScottAllen' },
            ];

            expect(authorsFormattedForDropdown(authors)).toEqual(expected);
        });
    });
});