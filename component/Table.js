import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import Color from '../constant/Color'

import {useSelector} from 'react-redux'

const TableSummary = props => {

  const DD = useSelector(state => state.sensorStatus.DD)
  const DG = useSelector(state => state.sensorStatus.DG)
  const DO = useSelector(state => state.sensorStatus.DO)
  const PH = useSelector(state => state.sensorStatus.PH)
  const TMP = useSelector(state => state.sensorStatus.TMP)
  
    const data = {
      tableHead: ['Sensor', 'Status'],
      tableData: [
        ['Salinity', DD],
        ['Ammonia', DG],
        ['Dissolved Oxygen', DO],
        ['pH', PH],
        ['Temperature', TMP],
      ]
    }

  // render() {
    // const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: 'gray'}}>
          <Row data={data.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={data.tableData} textStyle={styles.text2}/>
        </Table>
      </View>
    )
  // }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 10, backgroundColor: 'transparent' },
  head: { height: 40, backgroundColor: Color.primaryLessLight },
  text: { margin: 6 ,color:'white'},
  text2:{
    margin: 8 ,
    color:'black'
  }
});

export default TableSummary