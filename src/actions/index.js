export const updateInput = (name, value) => {
    console.log(name, value);
    return {
        type : 'UPDATE_INPUT',
        name,
        value
    };
};
