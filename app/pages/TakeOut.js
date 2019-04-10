/**
 * @author Lei
 * @repo https://github.com/stoneWeb/elm-react-native
 */
'use strict';

import React, { Component, PropTypes } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  Platform,
  ScrollView,
  AlertIOS,
  RefreshControl,
  TouchableHighlight,
  TouchableNativeFeedback, AsyncStorage
} from 'react-native'

import px2dp from '../util'
import data from '../data'
import api from '../../api'

class Item extends Component {
  constructor(props){
      super(props)
  }
  static propTypes = {
      title: PropTypes.string.isRequired,
      logo: PropTypes.number,
      state: PropTypes.string,
      time: PropTypes.string,
      info: PropTypes.string,
      price: PropTypes.string,
  }

  render(){
    const { title, logo, state, time, info, price } = this.props
    let render = (
      <View style={styles.item}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.info}>
          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <Text style={{fontSize: px2dp(14), color:"#333"}}>{title}</Text>
            <Text style={{fontSize: px2dp(13), color:"#333"}}>{state}</Text>
          </View>
          <View style={{paddingBottom: 8,borderBottomWidth: 1,borderBottomColor: "#f9f9f9"}}>
            <Text style={{fontSize: px2dp(12), color:"#bbb",marginTop: 5}}>{time}</Text>
          </View>
          <View style={{flexDirection: "row", justifyContent: "space-between", paddingVertical: 16}}>
            <Text style={{fontSize: px2dp(13), color:"#aaa"}}>{info}</Text>
            <Text style={{fontSize: px2dp(13), color:"#333"}}>{price}</Text>
          </View>
        </View>
      </View>
    )
    return (
      Platform.OS === 'ios'?(
        <TouchableHighlight style={{marginTop: 10}} onPress={() => {}}>{render}</TouchableHighlight>
      ):(
        <View style={{marginTop: 10}}><TouchableNativeFeedback onPress={() => {}}>{render}</TouchableNativeFeedback></View>
      )
    )
  }
}
export default class TakeOut extends Component {
  constructor(props){
      super(props)
      this.state = {
        data: [],
        isRefreshing: false
      }
  }
  componentDidMount(){
    this.getAllOrder();
    this._onRefresh()
  }
  getAllOrder(){
    let user;
    (async function () {
      user = await AsyncStorage.getItem('userForm')
    })().then(res => {
      user = JSON.parse(user);
      let data = {userId: user.userId, password: user.password};
      return api.TackOutGetAllId(data)
    }).then(res=>{
      let data = {userId: user.userId, password: user.password,ordersId:JSON.parse(res.ordersId)};
      return api.TackOutGetAllOrder(data);
    }).then(res=> {
      let order =[];
      res.forEach(item=>{
        let content = item.content.split(',');
        let o ={
          title: "来西口（酒仙桥）",
          logo: 14,
          state: "订单已完成",
          time: "2016-09-05 12:11",
          info: "特色油泼面等两件商品",
          price: "￥57"
        }
        o.title = content[0];
        o.time = item.orderTime;
        o.info = content.slice(1).join('+');
        o.price = '￥'+item.totalPrice;
        order.push(o);
      })
      this.setState({
        data: order,
      })
    })
  }
  _onRefresh(){
    this.setState({isRefreshing: true});
    setTimeout(() => {
      this.setState({
        isRefreshing: false
      })
    }, 1500)
  }
  render(){
    return (
      <ScrollView
        style={{backgroundColor: "#f3f3f3"}}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh.bind(this)}
            tintColor="#bbb"
            colors={['#ddd', '#0398ff']}
            progressBackgroundColor="#ffffff"
          />
        }
      >
        <Text style={{textAlign: "center", color: "#999", fontSize: px2dp(12), paddingTop: 20}}>{"近期订单"}</Text>
        {
          this.state.data.map((item, i) => {
            return <Item key={i} {...item} />
          })
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    paddingLeft: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingTop: 16
  },
  logo: {
    width: 35,
    height: 35,
    marginRight: 8,
    resizeMode: "cover",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#f5f5f5"
  },
  info: {
    paddingRight: 16,
    flex: 1
  }
})
