import * as actions from '../../src/actions/index';

describe('actions', () => {
    it('should create an action to update input', () => {
        const inputName = 'Title';
        const inputValue = 'Testing';
        const expectedAction = {
            type: 'UPDATE_INPUT',
            name: 'Title',
            value: 'Testing'
        }
        expect(actions.updateInput(inputName, inputValue)).toEqual(expectedAction)
    });
});