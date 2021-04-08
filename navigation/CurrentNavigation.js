import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { View, TouchableOpacity, StyleSheet} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import CurrentScreen from '../screen/Current'

import Color from '../constant/Color'

const Stack = createStackNavigator();

export default CurrentNavigation =({navigation, route})=> {
  // console.log(route.params.topicData)
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Current" 
        component={CurrentScreen} 
      
        options={{
          headerLeft:()=>(
            <View>
                <TouchableOpacity onPress={() => {navigation.openDrawer()} }>
                <MaterialIcons name='menu' size={28}  style={styles.menuIcon} color='white'/>
                </TouchableOpacity>
              </View>   
          ),
          headerStyle: {
            backgroundColor: Color.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  menuIcon:{
    // color:'black',
    paddingLeft:20
  }
})