import React, {AppRegistry, Navigator, StyleSheet, Text, View} from 'react-native'
import {Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions} from 'react-native-router-flux'

import Launch from './components/Launch'
import Login from './components/Login'
import Error from './components/Error'

class TabIcon extends React.Component {
  render(){
    return (
      <Text style={{color: this.props.selected ? "red" :"black"}}>{this.props.title}</Text>
    );
  }
}
class Right extends React.Component {
  render(){
    return <Text style={{
        width: 80,
        height: 37,
        position: "absolute",
        bottom: 4,
        right: 2,
        padding: 8
    }}>Right</Text>
  }
}
const styles = StyleSheet.create({
  container: {flex:1, backgroundColor:"transparent",justifyContent: "center",
    alignItems: "center",}

});

const reducerCreate = params=>{
  const defaultReducer = Reducer(params);
  return (state, action)=>{
    console.log("ACTION:", action);
    return defaultReducer(state, action);
  }
};

export default class App extends React.Component {
  render() {
    return <Router createReducer={reducerCreate}>
      <Scene key="modal" component={Modal} >
        <Scene key="root" hideNavBar={true}>
          <Scene key="launch" component={Launch} title="Launch" initial={true} />
          <Scene key="login" direction="vertical"  >
            <Scene key="loginModal" component={Login} title="Login"/>
          </Scene>
        </Scene>
        <Scene key="error" component={Error}/>
      </Scene>
    </Router>;
  }
}
