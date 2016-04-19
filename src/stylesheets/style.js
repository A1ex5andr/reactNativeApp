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
  },
  userCard: {
    backgroundColor: "#f1f1f1",
    width: 300,
    flexDirection: 'column',
    margin:4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'gray'
  },
  userName: {
    fontSize: 12,
    fontWeight: "800",
    alignSelf: "stretch",
    margin: 4,
    marginBottom: 0,
  },
  userCompany: {
    fontSize: 12,
    fontWeight: "400",
    margin: 4
  },
  userLink: {
    fontSize: 10,
    fontWeight: "400",
    position: 'absolute',
    bottom: 4,
    right: 4
  }
});

module.exports = styles;