import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Button } from "react-native";
import { ECharts } from "react-native-echarts-wrapper";
export default class App extends Component {


  onRef = ref => {
    if (ref) {
      this.chart = ref;
    }
  };

  onData = param => {};

  initChart = () => {
    function randomData() {
      now = new Date(+now + oneDay);
      value = value + Math.random() * 21 - 10;
      return {
        name: now.toString(),
        value: [
          [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
          Math.round(value)
        ]
      };
    }

    var data = [];
    var now = +new Date(1997, 9, 3);
    var oneDay = 24 * 3600 * 1000;
    var value = Math.random() * 1000;
    for (var i = 0; i < 1000; i++) {
      data.push(randomData());
    }

    const option = {
      tooltip: {
        formatter: "{a} <br/>{b} : {c} ppm",
      },
      radius: "100%",
      // toolbox: {
      //   feature: {
      //     restore: {},
      //     saveAsImage: {},
      //   },
      // },
      series: [
        {
          // name: "Ammonia",
          type: "gauge",
          detail: { formatter: "{value} ppm" },
          data: [{ value:this.props.data, name: 'this.unit' }],
          max: 100,
          axisLabel: {
            fontSize: 14,
                 distance: 10
          },
          detail: {
            formatter: "{value}",
            // backgroundColor: "rgba(227, 0, 0, 1)",
            offsetCenter: ["0", "78%"],
          },
          title: {
            offsetCenter: ["0", "100%"],
            color: "rgba(0, 0, 0, 1)",
          },
          splitNumber: 4,
          axisLine: {
            lineStyle: {
              color: [
                [0.29, "rgb(15,164,100)"],
                [0.7, "rgb(235,137,52)"],
                [1, "rgb(219,58,55)"],
              ],
              // color: [
              //   [0.29, "rgb(115,222,133)"],
              //   [0.7, "rgb(235,137,52)"],
              //   [1, "rgb(219,58,55)"],
              // ],
              shadowColor: "rgba(255, 255, 255, 0.7)",
              shadowBlur: 10,
              width: 20,
            },
          },
                     splitLine: {
      show: true,
      length: "20%"}
          // startAngle: 190,
          // endAngle: -0,
        },
        
      ],
    };

    this.chart.setOption(option);

    //no query parameter: whole option object
    this.chart.getOption(option => {
      console.log(option);
    });

    //with query parameter
    // this.chart.getOption(
    //   option => {
    //     console.log(option);
    //   },
    //   ["dataZoom", "series"]
    // );

    const instance = this.chart;
    let data2 = this.props.data

    setInterval(function() {
      // let data2 = this.props.data
      // for (var i = 0; i < 5; i++) {
      //   data.shift();
      //   data.push(randomData());
      // }

      instance.setOption({
        // this.chart.setOption({
        series: [
          {
            data: [{ value: data2 }],
          }
        ]
      });
    }, 2000);
  };

  render() {
    return (
      <SafeAreaView style={styles.chartContainer}>
        <Button title="Start" onPress={this.initChart} />

        <ECharts
          option={{}}
          ref={this.onRef}
          additionalCode={this.additionalCode}
          onData={this.onData}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  chartContainer: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    width:'100%'
  }
});