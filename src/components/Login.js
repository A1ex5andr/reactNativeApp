import React, {View, Text, StyleSheet} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";
import styles from '../stylesheets/style';

export default class extends React.Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Text style={styles.info}>Login page: {this.props.data}</Text>

        <Button onPress={()=>Actions.error("Info message")}>POPUP</Button>

        <Button onPress={Actions.pop} style={styles.buttonBack}>Back</Button>

      </View>
    );
  }
}
