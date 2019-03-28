import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { AsyncStorage, View } from 'react-native';
import Login from './Login';
import Wrapper from '../component/Wrapper';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigator.push({
        component: userToken ? Login : Login,
        args: {}
    });
  };

  render() {
    return(
      <View />
    );
  }
}