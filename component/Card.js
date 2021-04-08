import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import { LinearGradient } from 'expo-linear-gradient';

import { View } from 'react-native'
import Color from '../constant/Color'
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyComponent = props => (
  
    <LinearGradient     style={{borderRadius:10}}                colors={[Color.primaryLight, Color.primary]}>
  <Card style={{backgroundColor:'transparent', borderRadius:10, width:100}}>
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle" right={LeftContent} /> */}
    <Card.Content >
      <View style={{justifyContent:'flex-end', alignItems:'flex-end'}}>
      <Title style={{color:'white', fontSize:15}}>{props.title}</Title>
      <Paragraph style={{color:'white', fontSize:20}}>{props.data}</Paragraph>
      </View>
    </Card.Content>
    {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
    {/* <Card.Actions style={{display:'flex', justifyContent:'flex-end', alignContent:'flex-end'}}>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions> */}
  </Card>
  </LinearGradient>
);



export default MyComponent;