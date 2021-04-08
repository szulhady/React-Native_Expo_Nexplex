import React, { Component } from "react";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ECharts } from "react-native-echarts-wrapper";
import Color from '../constant/Color'

import {useSelector} from 'react-redux'
const MultipleLineChart = props=> {
  // console.log(props.data)
  const DD = useSelector(state => state.trends)
  // console.log(DD)
  const chart = React.useRef(null);
  var option

  useEffect(()=>{

    chart.current.setOption(option);
    console.log('here')
  })

 option={
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      crossStyle: {
        color: "#999",
      },
    },
  },
  // toolbox: {
  //   feature: {
  //     saveAsImage: { show: true, title: "Save" },
  //   },
  // },
  legend: {
    data: ["Min", "Max", "Avg"],
    textStyle: {
      fontSize: 12,
    },
  },
  xAxis: {
    name: 'Time',
    offset: 20,
    nameLocation: "center",
    nameTextStyle: {
      fontSize: 12,
    },
    axisLabel: {
      fontSize: 12,
      verticalAlign: "bottom",
    },
    type: "category",
    data: [10,20,30,40,50],
  },
  yAxis: {
    nameTextStyle: {
      fontSize: 12,
    },
    name: 'Value',
    type: "value",
    min: 0,
    max: 40,
    axisLabel: {
      // formatter: "{value} cm",
      fontSize: 12,
    },
  },

  series: [
    {
      //min data set
      name: "Min",
      data: [5,5,5,5,5],
      type: "line",
      fontSize: 30,
      color: "#36c25b",
      areaStyle: {color:'rgba(135, 211, 124, 1)'},  
      label: {
        color: "black",
        fontSize: 15,
        formatter: function (d) {
          return d.name + d.data;
        },
      },
    },
    {
      //max data set
      name: "Max",
      data: [15,15,15,15,15],
      type: "line",
      fontSize: 30,
      color: "#f52525",
      areaStyle: {color:'rgba(246, 36, 89, 0.2)'},
      label: {
        color: "black",
        fontSize: 15,
        formatter: function (d) {
          return d.name + d.data;
        },
      },
    },
    {
      //average data set
      name: "Avg",
      data: [10,10,10,10,10],
      type: "line",
      fontSize: 30,
      color: "#1930fc",
      areaStyle: {color:'rgba(137, 196, 244, 0.5)'},
      label: {
        color: "black",
        fontSize: 15,
        formatter: function (d) {
          return d.name + d.data;
        },
      },
    },
  ],
}

    return (
      <View style={styles.chartContainer}>
        <View style={{backgroundColor:Color.primaryLessLight, padding:10}}>
          <Text style={{textAlign:'center', color:'white'}}>
            {props.title}
          </Text>
        </View>
        <ECharts
          option={option}
          backgroundColor="transparent"
          ref={chart}
        />
      </View>
    );
  // }
}

const styles = StyleSheet.create({
  chartContainer: {
    // flex: 1,
    width:'100%',
    height:200,
    borderRadius:10,
    overflow:'hidden',
  }
});

export default MultipleLineChart