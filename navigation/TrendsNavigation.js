import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { View, TouchableOpacity, StyleSheet} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import TrendsScreen from '../screen/Trends'

import Color from '../constant/Color'
const Stack = createStackNavigator();

export default function TrendsNavigation({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Trends" 
        component={TrendsScreen} 
        options={{
          headerLeft:()=>(
            <View>
                <TouchableOpacity onPress={() => {navigation.openDrawer()} }>
                <MaterialIcons name='menu' size={28}  style={styles.menuIcon}/>
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
        }}
        />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  menuIcon:{
    color:'white',
    paddingLeft:20
  }
})