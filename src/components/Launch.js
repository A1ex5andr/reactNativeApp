import React, {View, Text, StyleSheet} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";
import styles from '../stylesheets/style';

class Launch extends React.Component {
    render(){
        return (
            <View {...this.props}  style={styles.container}>
                <Text style={styles.welcome}>Hello World :)</Text>
                <Button onPress={()=>Actions.login({data:"Welcome!", title:"HOME" })}>Go to Login page</Button>
            </View>
        );
    }
}

module.exports = Launch;