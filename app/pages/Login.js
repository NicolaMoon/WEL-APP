import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, TextInput, AsyncStorage, Alert } from 'react-native';
import Button from '../component/Button';
import Register from './Register';
import Wrapper from '../component/Wrapper';
import api from '../../api';

export default class extends Component {
  state = {
    phone: undefined,
    password: undefined,
  }

  handleSubmit() {
    const { phone, password } = this.state;
    api.loginSubmit({ phone, password }).then((data) => {
        if (data.state === "success") {
          AsyncStorage.setItem('userToken', data.userId.toString());
          this.handleGoHome();
        } else {
          Alert.alert(
            '❌登录失败',
            '请检查您的输入，号码或密码错误',
            [
              { text: '确定' },
            ]
          );
        }
      });
  }

  handleGoHome() {
    this.props.navigator.push({
      component: Wrapper,
      args: {}
    });
  }

  handleGoRegister() {
    this.props.navigator.push({
      component: Register,
      args: {}
    });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <StatusBar backgroundColor="#1890ff" />
        <Text style={styles.title}>WEL~</Text>
        <Text style={styles.subtitle}>Welcome to wel</Text>
        <View style={styles.bg} />
        <View style={styles.inputBox}>
          <TextInput
            placeholder="电话"
            placeholderTextColor="#707070"
            style={styles.input}
            underlineColorAndroid={'transparent'}
            value={this.state.phone}
            onChangeText={(phone) => this.setState({ phone })}
            maxLength={11}
          />
          <TextInput
            placeholder="密码"
            placeholderTextColor="#707070"
            secureTextEntry
            style={styles.input}
            underlineColorAndroid={'transparent'}
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            maxLength={12}
          />
          <Button style={{ position: "absolute", bottom: 80, left: 8, right: 8, flex: 1 }} onPress={this.handleSubmit.bind(this)}>
            <View style={{ height: 60, flexDirection: "row", backgroundColor: "#2ea1fe", flex: 1, alignItems: "center", justifyContent: "center", borderRadius: 12 }}>
              <Text style={{ color: "#fff", fontSize: 32, marginLeft: 8 }}>登录</Text>
            </View>
          </Button>
          <Button style={{ position: "absolute", bottom: 8, left: 8, right: 8, flex: 1 }} onPress={this.handleGoRegister.bind(this)}>
            <View style={{ height: 60, flexDirection: "row", backgroundColor: "#2ea1fe", flex: 1, alignItems: "center", justifyContent: "center", borderRadius: 12 }}>
              <Text style={{ color: "#fff", fontSize: 32, marginLeft: 8 }}>注册</Text>
            </View>
          </Button>
        </View>
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
    marginBottom: 35,
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
  },
  bg: {
    position: "absolute",
    zIndex: -1,
    top: 0,
    left: 0,
    right: 0,
    height: 370,
    backgroundColor: "#2ea1fe",
  },
  inputBox: {
    marginLeft: 12,
    marginRight: 12,
    height: 340,
    borderRadius: 12,
    backgroundColor: "#fff",
    elevation: 15,
  },
  input: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 16,
    paddingLeft: 10,
    padding: 0,
    height: 60,
    minWidth: 360,
    borderRadius: 20,
    borderColor: 'skyblue',
    borderWidth: 1,
    color: "#000",
    fontSize: 28,
  },
});
