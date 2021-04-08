import { StatusBar } from 'expo-status-bar';
import React, { useState, useMemo, useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import DrawerNavigation from './navigation/DrawerNavigation'
import LoginNavigation from './navigation/LoginNavigation'
import LoginScreen from './screen/Login2'
import AuthContext from './component/Context'


var mqtt = require('@taoqf/react-native-mqtt')
var client  = mqtt.connect('wss://tron.airmode.live:8083/mqtt')


import {Provider} from 'react-redux'
// var mqtt = require('@taoqf/react-native-mqtt')
// var client  = mqtt.connect('wss://tron.airmode.live:8083/mqtt')

// client.on('connect', function () {
//   client.subscribe('1000/data', function (err) {
//       if (!err) {
//           // client.publish('presence', 'Hello mqtt')
//           console.log('connected')
//         }
//       })
//     })



import store from './store/index'

class sensorStatus{
  constructor(data,maxData){
    if(data>maxData){
      this.status = 'High'
    }else{
      this.status = 'Good'
    }
  }
}

class warningSensor{
  constructor(DD,maxDD, DG, maxDG, DO, maxDO, PH, maxPH, TMP, maxTMP){
    let warnings = 0
    if(DD>maxDD){
      warnings ++
    }
    if(DG>maxDG){
      warnings ++
    }
    if(DO>maxDO){
      warnings ++
    }
    if(PH>maxPH){
      warnings ++
    }
    if(TMP>maxTMP){
      warnings ++
    }
    this.warning = warnings
  }
}

const maxDD=10
const maxDG=10
const maxDO=10
const maxPH=10
const maxTMP=10

const arrayDD=[]

export default function App() {
  // const [isLogin, setIsLogin] = useState(false)

  const initialLoginState = {
    isLoading: true,
    username: null,
    token: null,
    deviceID: null,
    scope: null,
    topics: null,
    userId: null,
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          username: action.username,
          token: action.token,
          deviceID: action.deviceID,
          scope: action.scope,
          topics: action.topics,
          userId: action.userId,
          isLoading: false,
        };
      case 'LOGIN': 

        return {
          ...prevState,
          username: action.username,
          token: action.token,
          deviceID: action.deviceID,
          scope: action.scope,
          topics: action.topics,
          userId: action.userId,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          username: null,
          token: null,
          deviceID: null,
          scope: null,
          topics: null,
          userId: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          username: action.id,
          token: action.token,
          isLoading: false,
        };
    }
  };

  
  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
      const { deviceID, scope, topics, userId, username, token } = foundUser
      console.log(deviceID)

      if( token!=='error'){
        try {
          // const items = [['deviceID', deviceID], ['scope',JSON.stringify(scope)], ['topics',JSON.stringify(topics)], ['userId',String(userId)], ['username', username], ['token', token]]
          // await AsyncStorage.multiSet( items);
         const items = {'deviceId':deviceID, 'scope':scope, 'topics':topics, 'userId': userId, 'username': username, 'token':token }

        //  console.log(topicsData)
         await AsyncStorage.setItem('user', JSON.stringify(items)) 
        //  getTopic = async () =>{
          // const topic =await AsyncStorage.getItem('user').then(res=>(JSON.parse(res)).topics[0])
          if(!client.connected){
            client.reconnect()
          }
          console.log(client.connected)
          client.subscribe(topics[0], function (err) {
            if (!err) {
               console.log('connected')
             }
          })
          client.on('message', function (topic, message) {
          const data = JSON.parse(message.toString())
          const { DD, DG, DO, PH, TMP } = data
          
          const warnings = new warningSensor( DD, maxDD, DG, maxDG, DO, maxDO, PH, maxPH, TMP, maxTMP).warning
          
          const DDStatus = new sensorStatus(parseFloat(DD), maxDD).status
          const DGStatus = new sensorStatus(parseFloat(DG), maxDG).status
          const DOStatus = new sensorStatus(parseFloat(DO), maxDO).status
          const PHStatus = new sensorStatus(parseFloat(PH), maxPH).status
          const TMPStatus = new sensorStatus(parseFloat(TMP), maxTMP).status
          // console.log(DDStatus)
          if(arrayDD.length<5){
            arrayDD.push(DD)
          }else{
            arrayDD.splice(0,1)
            arrayDD.push(DD)
          }

          // console.log(arrayDD)
          store.dispatch({
            type: 'ADD_SENSOR_DATA',
            payload:{
              text: data,
              DDStatus: DDStatus,
              DGStatus: DGStatus,
              DOStatus: DOStatus,
              PHStatus: PHStatus,
              TMPStatus: TMPStatus,
              warnings:warnings,
              arrayDD: arrayDD
            }
          })
          // console.log(store.getState().sensorData)
        })
     
        // }
        // getTopic()

         dispatch({ type: 'LOGIN', deviceID:deviceID, scope:scope, topics:topics, userId:userId, username: username, token: token , topic:'1000/data'});
        } catch(e) {
          console.log(e);
        }
      }
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('user');
      } catch(e) {
        console.log(e);
      }
      client.end()
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      // setUserToken('fgkj');
      // setIsLoading(false);
    },
  }), []);

  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!!!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <Provider store={store}>

    <AuthContext.Provider value={authContext}>
      {loginState.token !== null  ?
      <DrawerNavigation />
      :
      // <LoginNavigation/>
      <LoginScreen/>
    }  
    </AuthContext.Provider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
