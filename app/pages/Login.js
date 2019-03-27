import React, {Component} from 'react';
import {View, Text, StatusBar, StyleSheet } from 'react-native';

export default class extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="#1890ff" />
      <Text style={styles.title}>WEL~</Text>
      <Text style={styles.subtitle}>Welcome to wel</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    paddingTop: 75,
    textAlign: "center",
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
  },
});