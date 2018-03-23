const input = (state = {
    title : '',
    description : '',
    url : '',
    library : []
}, action ) => {
    switch (action.type) {
        case 'UPDATE_INPUT':
            return Object.assign({}, state, {
                [action.name]: action.value
            });
        case 'ADD_TO_LIBRARY':
            return Object.assign({}, state, {
                library : state.library.concat({
                    title : state.title, 
                    description : state.description, 
                    url : state.url
                }), 
                title : '',
                description : '',
                url : ''
            });
        default:
            return state;
    }
};

export default input;