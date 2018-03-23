import React from 'react';

import '../styles/components/Form.scss';
import PropTypes from 'prop-types';
import FormField from './FormField'; 

const Form = ({updateInput, addToLibrary, input}) => {
    return(
        <div>
            <form onSubmit={event => {
                event.preventDefault();
                console.log(input);
                addToLibrary(input);
            }}>
                <FormField 
                    name='title'
                    label='Title'
                    type='text'
                    value={input.title}
                    handleChange = {event => updateInput(event.target.name, event.target.value)}
                />
                <FormField
                    name='description'
                    label='Description'
                    type='text'
                    value={input.description}
                    handleChange = {event => updateInput(event.target.name, event.target.value)} 
                />
                <FormField 
                    name='url'
                    label='URL'
                    type='url'
                    value={input.url}
                    handleChange = {event => updateInput(event.target.name, event.target.value)}
                />
                <input type='submit' value='Add' />
            </form>
        </div>
    );
};

Form.propTypes = {
    updateInput : PropTypes.func.isRequired,
    addToLibrary : PropTypes.func, 
    input : PropTypes.object
};

export default Form;