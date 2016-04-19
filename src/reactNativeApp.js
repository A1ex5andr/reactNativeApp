import React, {AppRegistry, Navigator, StyleSheet, Text, View} from 'react-native'
import {Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions} from 'react-native-router-flux'
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

import Async from './middlewares/async';

import Launch from './components/Launch'
import Login from './components/Login'
import Error from './components/Error'
import UserList from './components/UserList'

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);


const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: "transparent", justifyContent: "center",
    alignItems: "center",
  }

});

// const reducerCreate = params=> {
//   const defaultReducer = Reducer(params);
//   return (state, action)=> {
//     console.log("ACTION:", action);
//     return defaultReducer(state, action);
//   }
// };

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
          <Scene key="modal" component={Modal}>
            <Scene key="root" hideNavBar={true}>
              <Scene key="launch" component={Launch} title="Launch" initial={true}/>
              <Scene key="login" direction="vertical">
                <Scene key="loginModal" component={Login} title="Login"/>
                <Scene key="UserList" component={UserList} title="User List"/>
              </Scene>
            </Scene>
            <Scene key="error" component={Error}/>
          </Scene>
        </Router>
      </Provider>
    )
  }
}
