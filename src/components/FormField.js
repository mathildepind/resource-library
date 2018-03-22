import React from 'react';
import PropTypes from 'prop-types';

class FormField extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    };
    

    render(){
        const {name, label, type, value, handleChange} = this.props;
        return(
            <div className='wrapper'>
                <label>
                    {label}
                    <input 
                        type={type}
                        value={value}
                        name={name}
                        placeholder={label}
                        onChange={handleChange}
                    />
                </label>
            </div>
        );
    };
};

FormField.propTypes = {
    label : PropTypes.string.isRequired,
    type : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    value : PropTypes.string,
    handleChange : PropTypes.func.isRequired,
};

export default FormField;