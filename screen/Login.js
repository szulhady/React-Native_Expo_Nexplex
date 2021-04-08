import React, { useContext } from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet} from 'react-native'

import AuthContext from '../component/Context'
import { CommonActions } from '@react-navigation/routers';
const LoginScreen = props =>{
  const {signIn} = useContext(AuthContext)
  return(
    <View style={styles.container}>
      <Text>Login Page</Text>
      <Button title="login" onPress={()=>{signIn()}}/>
      <StatusBar style="auto" />
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
})

export default LoginScreen