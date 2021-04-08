import React, { useContext } from 'react'

import { View, Text, Button, StyleSheet, ScrollView} from 'react-native'

import AuthContext from '../component/Context'
import LineChart from '../component/LineChart'
import MultipleLineChart from '../component/MultipleLineChart'


import {useSelector} from 'react-redux'

  
const TrendsScreen = props =>{
    
  const arrayDD = useSelector(state => state.trends.DD.current)
  // console.log(arrayDD)
  
  const {signOut} = useContext(AuthContext)
  return(
    <ScrollView >
      <View style={styles.container}>
        {/* <Text>Trends Page</Text> */}
        <LineChart title='Current' data={arrayDD}/>
        <MultipleLineChart title='Hourly'/>
        <MultipleLineChart title='Daily'/>
        <MultipleLineChart title='Monthly'/>
        <Button title="Log Out" onPress={()=>{signOut()}}/>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:'100%'
  },
})

export default TrendsScreen