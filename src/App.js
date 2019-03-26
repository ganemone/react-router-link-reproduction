import React, { Component } from 'react';
import {Provider, connect} from 'react-redux';
import {BrowserRouter, Route, Switch, Link, withRouter} from 'react-router-dom';
import {createStore} from 'redux';

const reducer = (state, action) => {
  return state || {
    test: 'data',
    hello: 'world',
  }
}

const store = createStore(reducer);

function Test() {
  return <div>Test</div>
}

function Hello() {
  return <div>Hello</div>
}

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <ul>
          <li><Link to="/test">Test</Link></li>
          <li><Link to="/hello">Hello</Link></li>
        </ul>
        <Switch>
          <Route path="/test" component={Test}/>
          <Route path="/hello" component={Hello}/>
        </Switch>
      </div>
    );
  }
}

const AppContainer = connect(state => state)(App);
// Wrapping in withRouter will ensure the component is updated
// const AppContainer = withRouter(connect(state => state)(App));

export default function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </Provider>
  );
}
