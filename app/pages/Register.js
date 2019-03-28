import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, TextInput } from 'react-native';
import Button from '../component/Button';
import NavBar from '../component/NavBar';
//FontAwesome
export default class Setting extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    name: undefined,
    phone: undefined,
    password: undefined,
    rePassword: undefined,
  }
  back() {
    this.props.navigator.pop()
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
        <NavBar
          title="注册"
          leftIcon="ios-arrow-back"
          leftPress={this.back.bind(this)}
        />
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
          <StatusBar backgroundColor="#1890ff" />
          <View style={styles.bg} />
          <View style={styles.inputBox}>
            <TextInput
              placeholder="昵称"
              placeholderTextColor="#707070"
              style={styles.input}
              underlineColorAndroid={'transparent'}
              value={this.state.name}
              onChangeText={(name) => this.setState({ name })}
              maxLength={8}
            />
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
            <TextInput
              placeholder="确认密码"
              placeholderTextColor="#707070"
              secureTextEntry
              style={styles.input}
              underlineColorAndroid={'transparent'}
              value={this.state.rePassword}
              onChangeText={(rePassword) => this.setState({ rePassword })}
              maxLength={12}
            />
            <Button style={{ position: "absolute", bottom: 8, left: 8, right: 8, flex: 1 }} onPress={() => { }}>
              <View style={{ height: 60, flexDirection: "row", backgroundColor: "#2ea1fe", flex: 1, alignItems: "center", justifyContent: "center", borderRadius: 12 }}>
                <Text style={{ color: "#fff", fontSize: 32, marginLeft: 8 }}>确定</Text>
              </View>
            </Button>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
    margin: 12,
    marginTop: 75,
    height: 460,
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
