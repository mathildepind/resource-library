export const updateInput = (name, value) => {
    return {
        type : 'UPDATE_INPUT',
        name,
        value
    };
};

export const addToLibrary = input => {
    return {
        type : 'ADD_TO_LIBRARY',
        input
    };
};