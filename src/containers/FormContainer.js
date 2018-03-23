import { connect } from 'react-redux';
import { updateInput, addToLibrary } from '../actions';
import Form from '../components/Form';

const getInput = state => {
    // console.log(state.input);
    return state.input;
};

const mapStateToProps = state => ({input: getInput(state)});

const mapDispatchToProps = dispatch => ({
    updateInput: (name, value) => dispatch(updateInput(name, value)),
    addToLibrary: input => dispatch(addToLibrary(input))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);