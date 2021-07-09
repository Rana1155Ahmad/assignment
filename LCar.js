import {state, StatusBar } from 'expo-status-bar';
import React from 'react';
import {  TouchableOpacity,  StyleSheet, Image,Alert,Text, View } from 'react-native';
import Upload from './Upload';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import * as firebase from 'firebase';
import  {firebaseConfig} from './config'
if(!firebase.apps.length){
 firebase.initializeApp(firebaseConfig);
}



/*

 CDetails(ma,my,mo,ep,c,p)
 {   if(this.state.a==1)
      { 
        return(
          <View >
                <View>
                 <Image source={{uri:p}} style={{borderRadius:50,width:'100%',height:'%50'}} />
                </View>
                <View style={{margin:20,}}>
                 <Text style={{fontWeight:'bold',fontSize:18}}>Make:                {ma}</Text>
                 <Text style={{fontWeight:'bold',fontSize:18}}>Modle:               {mo}</Text>
                 <Text style={{fontWeight:'bold',fontSize:18}}>Manufacturing Year:  {my}</Text>
                 <Text style={{fontWeight:'bold',fontSize:18}}>Engine Power:        {ep}</Text>
                 <Text style={{fontWeight:'bold',fontSize:18}}>Color:               {c}</Text>
                 <TouchableOpacity onPress={()=>this.DCar(i.id)}
                 style={{backgroundColor:"blue",width:50,height:25, marginLeft:"50%"}}>
                 <Text  style={{color:"white",fontWeight:'bold',marginLeft:7}}>Delet</Text>
                 </TouchableOpacity>
                </View>
          </View>
        )
      }
  } 

*/


class LCar extends React.Component {
  
 state={
  a:0,
  lis:[],
 }
 componentDidMount()
 {
   firebase.database().ref("Cars")
    .once("value", data=>{
    this.setState({lis:Object.values(data.val()) })
    })
 }

 DelCar(a)
 {
  firebase.database().ref("Cars/"+a).remove();
 }
  render()
  { console.log(this.state.lis)
       
     const list= this.state.lis.map(i=>{
       
      return(
        <View key={i.Photo}>
         <TouchableOpacity onPress={()=>this.props.navigation.navigate("DCar",{ ma:i.Make, mo:i.Models, p:i.Photo, my:i.MYears, ep:i.EPowers, c:i.Color, }) }>

          <View style={{flexDirection:'row'}}>
                <View>
                 <Image source={{uri:i.Photo}} style={{borderRadius:50,width:100,height:100}} />
                </View>
                <View style={{margin:20,}}>
                 <Text style={{fontWeight:'bold',fontSize:18}}>{i.Make}</Text>
                 <Text style={{fontWeight:'bold',fontSize:18}}>{i.Models}</Text>
                 <TouchableOpacity onPress={()=>this.DelCar(i.id)}
                 style={{backgroundColor:"blue",width:50,height:25, marginLeft:"50%"}}>
                 <Text  style={{color:"white",fontWeight:'bold',marginLeft:7}}>Delet</Text>
                 </TouchableOpacity>
                </View>
          </View>
          <View style={{height:8,backgroundColor:'pink'}}></View>
        </TouchableOpacity>
        </View>
        )
     })

    return (
    <View style={styles.container}>
       
       {list} 
      <StatusBar style="auto" />
    </View>
    ); 
  }
}







class DCar extends React.Component
{  
 render()
 {
   return (
           <View >
                <View>
                 <Image source={{uri:this.props.route.params.p}} style={{borderRadius:10,marginTop:20,marginLeft:20, width:'80%',height:'70%'}} />
                </View>
                <View style={{marginTop:-40,marginLeft:10}}>
                 <Text style={{fontWeight:'bold',fontSize:18}}>Make:                                       {this.props.route.params.ma}</Text>
                 <Text style={{fontWeight:'bold',fontSize:18}}>Modle:                                      {this.props.route.params.mo}</Text>
                 <Text style={{fontWeight:'bold',fontSize:18}}>Manufacturing Year:              {this.props.route.params.my}</Text>
                 <Text style={{fontWeight:'bold',fontSize:18}}>Engine Power:                         {this.props.route.params.ep}</Text>
                 <Text style={{fontWeight:'bold',fontSize:18}}>Color:                                         {this.props.route.params.c}</Text>
                </View>
          </View>
     );
 }  
}





class Dash extends React.Component
{  
 render()
 {
   return (
           <View >
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('LCar')}
                   style={{backgroundColor:'blue',width:100,height:50,margin:100}}>
                     <Text style={{color:'white',fontWeight:'bold',margin:12}}> List Of Car</Text>
                </TouchableOpacity>  
                   
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Upload')}
                  style={{backgroundColor:'blue',width:120,height:50,margin:50,marginLeft:100}}>
                     <Text style={{color:'white',fontWeight:'bold',margin:12}} > Add New Car</Text>
                </TouchableOpacity>  
          </View>
     );
 }  
}



const Stack=createStackNavigator()
export default function Lists()
{
  return(

  <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        marginLeft:25},
      }}>
    <Stack.Screen name="Dash" component={Dash} options={{title:"Menu"}} />
    <Stack.Screen name="LCar" component={LCar} options={{title:"List of Cars"}} />
    <Stack.Screen name="Upload" component={Upload} options={{title:"                Add New Car"}} />
    <Stack.Screen name="DCar" component={DCar} options={{title:"Details of Car"}} />
  </Stack.Navigator>  
  
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
   },
});
