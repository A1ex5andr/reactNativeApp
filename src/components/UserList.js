import React, {Component, Navigator, StyleSheet, Text, View} from 'react-native'
import {connect} from 'react-redux';
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";
// import {Link} from 'react-router';
import * as actions from '../actions';

import styles from '../stylesheets/style';

class UserList extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }


  renderUser(user) {
    return (
      <View key={user.id} style={styles.userCard}>
        <Text style={styles.userName}>Name: {user.name}</Text>
        <Text style={styles.userCompany}>Company: {user.company.name}</Text>
        <Button style={styles.userLink}>{user.website}</Button>
      </View>
    )
  }

  render() {
    console.log('we are here!', this.props);

    return (
      <View style={[styles.container, this.props.style]}>
        <View>{this.props.users.map(this.renderUser)}</View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {users: state.users}
}

export default connect(mapStateToProps, actions)(UserList);