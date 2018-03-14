import { connect } from 'react-redux';
import Main from './Main';

const Container = connect(
  function mapStateToProps(state) {
    const {
      hobbies
    } = state.AppReducer;
    return {
      hobbies:hobbies
    };
  }
)(Main);
export default Container;