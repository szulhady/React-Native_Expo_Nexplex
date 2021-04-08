
import { createStore } from 'redux'

const initialState={
  sensorData:{
  "DD": "0",
  "DG": "0",
  "DO": "0",
  "PH": "0",
  "TMP": "0",
  "topicDeviceID":0,
  },
 sensorStatus:{
    "DD": "",
    "DG": "",
    "DO": "",
    "PH": "",
    "TMP": "",
  },
  trends:{
    'DD':{
      current:[0],
      hourly:[],
      daily:[],
      monthly:[]
    },
    // 'DG':{
    //   current:[],
    //   hourly:[],
    //   daily:[],
    //   monthly:[]
    // },
    // 'DO':{
    //   current:[],
    //   hourly:[],
    //   daily:[],
    //   monthly:[]
    // },
    // 'PH':{
    //   current:[],
    //   hourly:[],
    //   daily:[],
    //   monthly:[]
    // },
    // 'TMP':{
    //   current:[],
    //   hourly:[],
    //   daily:[],
    //   monthly:[]
    // }
  },
  warnings:0
}

function todos(state = initialState, action) {
  switch (action.type) {
    case 'ADD_SENSOR_DATA':
      return {
        ...state,
        sensorData:action.payload.text,
        sensorStatus:{
          'DD':action.payload.DDStatus,
          'DG':action.payload.DGStatus,
          'DO':action.payload.DOStatus,
          'PH':action.payload.PHStatus,
          'TMP':action.payload.TMPStatus
        },
        warnings:action.payload.warnings,
        trends:{
          ...state.trends,
          DD:{
            ...state.trends.DD,
            current:action.payload.arrayDD,
            // hourly:[],
            // daily:[],
            // monthly:[]
          },
          // DG:{
          //   ...state.trends.DG,
          //   current:[],
          //   hourly:[],
          //   daily:[],
          //   monthly:[]
          // },
          // DO:{
          //   ...state.trends.DO,
          //   current:[],
          //   hourly:[],
          //   daily:[],
          //   monthly:[]
          // },
          // PH:{
          //   ...state.trends.PH,
          //   current:[],
          //   hourly:[],
          //   daily:[],
          //   monthly:[]
          // },
          // TMP:{
          //   ...state.trends.TMP,
          //   current:[],
          //   hourly:[],
          //   daily:[],
          //   monthly:[]
          // }
        }
      }
    
    default:
      return state
  }
}

export default store = createStore(todos)