import React from 'react';
import PropTypes from 'prop-types';
import FormField from './FormField';

//{updateInput, input, inputRequest}

const Form = ({updateInput, input}) => {
    return(
        <div>
            <form onSubmit={event => {
                event.preventDefault();
                //inputRequest(input);
            }}>
                <FormField 
                    name='title'
                    label='Title'
                    type='text'
                    value={input.value}
                    handleChange = {event => updateInput(event.target.name, event.target.value)}
                />
                <FormField
                    name='description'
                    label='Description'
                    type='text'
                    value={input.value}
                    handleChange = {event => updateInput(event.target.name, event.target.value)} 
                />
                <FormField 
                    name='url'
                    label='URL'
                    type='url'
                    value={input.value}
                    handleChange = {event => updateInput(event.target.name, event.target.value)}
                />
                <input type='submit' value='Add' />
            </form>
        </div>
    );
};

Form.propTypes = {
    updateInput : PropTypes.func.isRequired,
    input : PropTypes.object
};

export default Form;