var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View
} = React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  info: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 25,
  },
  buttonBack: {
    marginTop: 10,
  }
});

module.exports = styles;