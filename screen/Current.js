import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { ScrollView ,View, Text, StyleSheet} from 'react-native'

import {useSelector} from 'react-redux'

import MyComponent from '../component/Card'
import Chart from '../component/Chart'
import TableSummary from '../component/Table'

const CurrentScreen = props =>{
 
  const DD = useSelector(state => state.sensorData.DD)
  const DG = useSelector(state => state.sensorData.DG)
  const DO = useSelector(state => state.sensorData.DO)
  const PH = useSelector(state => state.sensorData.PH)
  const TMP = useSelector(state => state.sensorData.TMP)
  const Warnings = useSelector(state => state.warnings)

  return(
    <ScrollView style={styles.view}>
      <View style={styles.cardContainer}>
        <MyComponent title='Station' style={{flex:1}} data='1' />
        <MyComponent title='Online'style={{flex:1}} data='1' />
        <MyComponent title='Warnings'style={{flex:1}} data={Warnings}/>
      </View>
    <View style={styles.container}>
      <Text style={styles.title}>CURRENT DATA</Text>
      <View style={styles.allData}>
        <View style={{flex:1, flexDirection:'row', justifyContent:'space-evenly', marginVertical:10}}>
          <View style={{flex:0.4}}>
            <View >
              <Chart data={parseFloat(DD)} sensor='DD' max='20' unit='ppt' title='Salinity'/>
            </View>
          </View>
          <View style={{flex:0.4}}>
            <View >
              <Chart data={parseFloat(DG)} sensor='DG' max='1' unit='mg/l' title='Ammonia'/>
            </View>
          </View>
        </View>
     
        <View style={{flex:1, flexDirection:'row', justifyContent:'space-evenly', marginVertical:10}}>
          <View style={{flex:0.4}}>
            <View >
              <Chart data={parseFloat(DO)} sensor='DO' max='20' unit='mg/l' title='Dissolved Oxygen'/>
            </View>
          </View>
          <View style={{flex:0.4}}>
            <View>
              <Chart data={parseFloat(PH)} sensor='PH' max='14' unit='unit' title='pH'/>
            </View>
          </View>
        </View>
     
        <View style={{flex:1, flexDirection:'row', justifyContent:'space-evenly', marginVertical:10}}>
          <View style={{flex:0.4}}>
            <View >
              <Chart data={parseFloat(TMP)} sensor='TMP' max='36' unit='°C'title='Temperature'/>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.title}>
        SUMMARY
      </Text>
      <TableSummary/>
    </View>
      {/* <StatusBar style="auto" /> */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  view:{
    backgroundColor:'#f3f5e4'
  },
  cardContainer:{
    flexDirection:'row', 
    justifyContent:'space-evenly', 
    margin:20,
    
  },
  container:{
    justifyContent:'center',
    // alignItems:'center'
    
  },
  title:{
    paddingLeft:30,
    paddingVertical:5
  },
  allData:{
    width:'100%',
    flexWrap:'wrap',
  },
})

export default CurrentScreen