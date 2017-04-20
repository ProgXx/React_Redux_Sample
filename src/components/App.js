import React from 'react';
import { connect } from 'react-redux';
import * as todoActions from '../actions/todoActions';

import AppUI from './App.ui';

const mapStateToProps = (state,ownProps) => {
  return {
    todos : state.todos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodos : () => {
      dispatch(todoActions.fetchTodos());
    }
  };
};


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render () {
    return <AppUI todos={this.props.todos}/>;
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
