import { connect } from 'react-redux';
import { updateInput } from '../actions';
import Form from '../components/Form';

const getInput = state => {
    console.log(state);
    return state.input;
};

const mapStateToProps = state => ({input: getInput(state)});

const mapDispatchToProps = dispatch => ({
    updateInput: (name, value) => dispatch(updateInput(name, value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);