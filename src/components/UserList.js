import React, {AppRegistry, Navigator, StyleSheet, Text, View} from 'react-native'
// import {Link} from 'react-router';
import * as actions from '../actions';
import {connect} from 'react-redux';
import styles from '../stylesheets/style';

export default class UserList extends React.Component {

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Text>1234</Text>
      </View>
    )
  }
}

// function mapStateToProps(state) {
//   return {users: state.users}
// }
//
// export default connect(mapStateToProps, actions)(UserList);