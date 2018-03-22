const input = (state = {
    title : '',
    description : '',
    url : ''
}, action ) => {
    switch (action.type) {
        case 'UPDATE_INPUT':
            return Object.assign({}, state, {
                [action.name]: action.value
            });
        default:
            return state;
    }
};

export default input;