import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { addNavigationHelpers } from 'react-navigation';
import Router from './src/Router';
import reducers from './src/reducers';

const AppWithoutNav = ({ dispatch, nav }) => {
  return (
    <Router 
      navigation={
        addNavigationHelpers({
          dispatch,
          state: nav
        })}
    />
  )
};

const mapStateToProps = ( state ) => ({
  nav: state.nav
});

const AppWithNav = connect( mapStateToProps )( AppWithoutNav );

export default class App extends Component {
  render() {
    const store = createStore( reducers, {}, applyMiddleware( reduxThunk ));

    return (
        <Provider store={ store }>
          <AppWithNav />
        </Provider>
    );
  }
};
