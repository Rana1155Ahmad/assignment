import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Upp from './Upload';
import Lists from './LCar';
import Dr from './Brand';

//<Screns/> <AdminLogin/>
/*
import Screns from './Screens';
import AddBranch from './AddBranch';
import SBranch from './SBranch.js';
import AddSlot from './AddSlot';
import Timing from './Tiiming';
import Closing from './Closeing';
import Screens from './Screens';
import Registration from './Registration.js';
import Upp from './Upload';
import Search from './Search';
import Mainpage from './MainPage';
*/



export default function App() {
  return (
    <View style={styles.container}>
       <Dr/> 
      <StatusBar style="auto" />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
   },
});
