import { state,StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import {TextInput} from 'react-native-paper';
import 
{
    TouchableOpacity,
    ImageBackground, 
    Button, 
    Image,
    StyleSheet, 
    Text,
    Alert,
    View,
    ScrollView } from 'react-native';
import Lists from './LCar'
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
const Drawer=createDrawerNavigator();
import * as firebase from 'firebase';
import  {firebaseConfig} from './config'
if(!firebase.apps.length){
 firebase.initializeApp(firebaseConfig);
}
 class Brand extends React.Component
{  
   state={
    list:[],
    brands:'',
   }

  componentDidMount()
  {
    firebase.database().ref("Cars")
    .once("value", data=>{
    this.setState({list:Object.values(data.val()) })
    })
  }
 render()
 {

  const lis= this.state.list.map(i=>{
       if(this.state.brands==i.Models)
       {

      return(
        <View key={i.Photo}>
                <View> 
                <Image source={{uri:i.Photo}} style={{borderRadius:50,width:100,height:100}}/>
                </View>
                 <Text style={{fontWeight:'bold',fontSize:18}}>Make:                                       {i.Make}</Text>
                 <Text style={{fontWeight:'bold',fontSize:18}}>Modle:                                      {i.Models}</Text>
                 <Text style={{fontWeight:'bold',fontSize:18}}>Manufacturing Year:              {i.MYears}</Text>
                 <Text style={{fontWeight:'bold',fontSize:18}}>Engine Power:                         {i.EPowers}</Text>                             
        
           <View style={{height:8,backgroundColor:'pink'}}></View>
        </View>
        );
    
       }
     })

   return (
           <ScrollView >
           <View style={{backgroundColor:'black',height:50}}>
                  <Text style={{color:'white',fontWeight:'bold',fontSize:18,marginTop:10,marginLeft:80}}> Manage Car Brands</Text>
           </View>
          <TextInput
            placeholder="Brand (e.g   corolla )"
            placeholderTextColor="black"
        
            value={this.state.brands}
            style={styles.inputss}
            onChangeText={(dis)=>this.setState({brands:dis}) }/>

             <View style={{marginLeft:20}}> 
               <Text>{lis}</Text>
               </View>

      </ScrollView>
     );
  }
}    


export default function Dr()
{
  return(

<NavigationContainer>
  <Drawer.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        marginLeft:25},
      }}>
     <Drawer.Screen name="Brand" component={Brand} options={{title:"Manage Car brands"}} />
     <Drawer.Screen name="Lists" component={Lists} options={{title:"Manage Car"}} />
   
  </Drawer.Navigator>
  </NavigationContainer>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
   },
});
