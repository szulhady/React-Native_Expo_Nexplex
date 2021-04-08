// import React from 'react'
// import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';

// const CustomDrawer = props => {
//   return (
//     <DrawerContentScrollView contentContainerStyle={{ }} {...props}>
//       <DrawerItemList {...props} />
//     </DrawerContentScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   upper:{
//   // marginTop:300
//   },
//   backgroundImage:{
//     resizeMode: "contain",
//     width:'100%',
//     height:200,
//     justifyContent:'center',
//     alignItems:'center'
//   },
// })
// export default CustomDrawer

import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, Button } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { DrawerItems } from 'react-navigation-drawer'
import Color from '../constant/Color'

import {
  Drawer,
} from 'react-native-paper';

import AuthContext from '../component/Context'
import { color } from 'react-native-reanimated';

  const CustomDrawer = props =>{
    
    const {signOut} = useContext(AuthContext)
  return(
    <DrawerContentScrollView contentContainerStyle={{ flex:1}} {...props} >
      <View style={styles.imageContainer}>
        <Image source={require('../assets/Nex-plex-logo.png')} style={styles.image}/>
      </View>
      <View style={{justifyContent:'space-between', flex:1}}>
        <View>
          <DrawerItemList {...props}/>
        </View>
        <View style={{paddingBottom:20}}>
          <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem 
              icon={({color, size}) => (
                <Icon 
                  name="exit-to-app" 
                  color='white'
                  size={size}
                />
              )}
              label="Sign Out"
              labelStyle={{color:'white'}}
              onPress={() => {signOut()}}
              />
          </Drawer.Section>
        </View>
      </View>
  </DrawerContentScrollView>
)
}


const styles = StyleSheet.create({
  imageContainer:{
    // padding:10,
    alignItems:'center',
    borderBottomColor:'white',
    borderBottomWidth:2,
    marginHorizontal:50,
    // paddingBottom:20,
    marginBottom:30,
    // backgroundColor:'red',
    // height:300,
    // width:'100%'
    // flex:1
  },  
  backgroundImage:{
    resizeMode: "contain",
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
    resizeMode: "contain",
    width:130,
    height:60
  },
  profileContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:30
  },
  profileAvatar:{
    resizeMode: "contain",
    width:50,
    height:50,
    // paddingHorizontal:20
  }, 
  profileText:{
    color:'white',
    paddingHorizontal:20,
    fontSize:26
  },
  drawerItem:{
    marginBottom:30
  },
  bottomDrawerSection: {
    marginBottom: 15,
    // borderTopColor: '#f4f4f4',
    // borderTopWidth: 1,
    // position:'absolute',
    // bottom:0,

  },
})

export default CustomDrawer