import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import CurrentNavigation from './CurrentNavigation'
import TrendsNavigation from './TrendsNavigation'
import CustomDrawer from '../component/CustomDrawer'
import Color from '../constant/Color'

import { MaterialCommunityIcons} from '@expo/vector-icons'

const Drawer = createDrawerNavigator();

export default App = props => {
  // console.log(props.topicData)
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Current"
      drawerContentOptions={{ 
        activeBackgroundColor: 'transparent',
        activeTintColor: Color.secondary,
        inactiveBackgroundColor:'transparent',
        inactiveTintColor:'white',
        itemStyle:{
          paddingVertical:5
        }
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
      drawerStyle={{
        backgroundColor: Color.primary,
      }}>
        <Drawer.Screen 
          name="Current" 
          component={CurrentNavigation} 
          options={{
          drawerIcon :
            config => <MaterialCommunityIcons name='view-dashboard' size={28}  color={config.color}/>
          }}
        />
        <Drawer.Screen 
          name="Trends" 
          component={TrendsNavigation} 
          options={{
            drawerIcon :
              config => <MaterialCommunityIcons name='chart-areaspline' size={28}  color={config.color}/>  
            }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}