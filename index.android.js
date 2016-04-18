import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class reactNativeApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          REACT NATIVE
        </Text>
        <Text style={styles.instructions}>
          redux - hotReloader - babel
        </Text>
        <Text style={styles.instructions}>
          Template for iOS and Android,{'\n'}
          development
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'orange'
  },
  instructions: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('reactNativeApp', () => reactNativeApp);
