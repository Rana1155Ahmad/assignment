import {state, StatusBar } from 'expo-status-bar';
import React from 'react';
import {  TouchableOpacity,  StyleSheet, Image,Alert,Text, View } from 'react-native';
import Upp from './Upload';


import * as firebase from 'firebase';
import  {firebaseConfig} from './config'
if(!firebase.apps.length){
 firebase.initializeApp(firebaseConfig);
}

export default class DCar extends React.Component {
  
 
  return (
    <View style={styles.container}>
           <View >
                <View>
                 <Image source={{uri:p}} style={{borderRadius:50,width:'100%',height:'%50'}} />
                </View>
                <View style={{margin:20,}}>
                 <Text style={{fontWeight:'bold',fontSize:18}}>Make:                {this.props.route.params.ma}</Text>
                 <Text style={{fontWeight:'bold',fontSize:18}}>Modle:               {this.props.route.params.mo}</Text>
                 <Text style={{fontWeight:'bold',fontSize:18}}>Manufacturing Year:  {this.props.route.params.my}</Text>
                 <Text style={{fontWeight:'bold',fontSize:18}}>Engine Power:        {this.props.route.params.ep}</Text>
                 <Text style={{fontWeight:'bold',fontSize:18}}>Color:               {this.props.route.params.c}</Text>
                 <TouchableOpacity onPress={()=>this.DCar(i.id)}
                 style={{backgroundColor:"blue",width:50,height:25, marginLeft:"50%"}}>
                 <Text  style={{color:"white",fontWeight:'bold',marginLeft:7}}>Delet</Text>
                 </TouchableOpacity>
                </View>
          </View>
 
    <StatusBar style="auto" />
    </View>
    ); 
  }
}
