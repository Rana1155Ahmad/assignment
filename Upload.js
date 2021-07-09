import { StatusBar } from 'expo-status-bar';
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
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import Icon from "react-native-vector-icons/Feather";

import * as firebase from 'firebase';
import  {firebaseConfig} from './config'
if(!firebase.apps.length){
 firebase.initializeApp(firebaseConfig);
}
 export default function Upload ({navigation}){
    const [im,setim]=useState(null);
    const [EPower,setEPower]=useState(null);
    const [MYear,setMYear]=useState(null);
    const [Makes,setMakes]=useState(null);
    const [Modle,setModle]=useState(null);
    const [Colors,setClrs]=useState(null);
    const [id,setid]=useState(null);
    const Submited=()=>
     { 
      const a=firebase.database().ref("Cars/"+id);
      a.set({
        Photo:im,
        Make:Makes,
        Models:Modle,
        MYears:MYear,
        EPowers:EPower,
        Color:Colors,
        id:id,
      })
      alert("Data is saved");
      setim(''),
      setMYear(''),
      setMYear(''),
      setEPower(''),
      setMakes(''),
      setModle(''),
      setClrs(''),
      setid('')
    }


  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
    
  },[]);

    const Gallery =async()=>
     {
     	let res=	await ImagePicker.launchImageLibraryAsync({
			mediaTypes:ImagePicker.MediaTypeOptions.All,
			allowEditing:true,
			aspect:[1,2],
			quality:0.5
			})
     	
     	setim(res.uri);
     	console.log(res);
     }

     const ims=()=>
     {
     	if(im)
     	{
     		return(<View>
     			<View>
                 <Image source={{uri:im}} style={{borderRadius:0,marginTop:-368,marginLeft:0,height:313,width:'100%'}}/>
     			</View>
     			
     			</View>
     			);

     	}
     }


  	  return (
<ScrollView>
    <View style={styles.container}>
     <View style={{backgroundColor:'gray',width:'100%',height:270,marginTop:20}}>
    </View>

    <TouchableOpacity style={styles.img} onPress={()=>Gallery()}>
    <Icon name="camera" style={{marginLeft:8,fontSize:55,color: "purple",}}></Icon>
    </TouchableOpacity>
    <View>
       {ims()}
    </View>


  <View  style={styles.indiv}>	           
        <View>
          <TextInput
  				  placeholder="Engine Power (e.g 1600cc)"
            placeholderTextColor="black"
  	        keyboardType="numeric"
  				value={EPower}
            style={styles.inputss}
  				  onChangeText={(dis)=>setEPower(dis)}
  				/>
				</View>

        <View>                 
    			<TextInput
          value={MYear}
    				placeholder="Manufacturing Year"
            placeholderTextColor="black"
    				style={styles.inputss}
            keyboardType="numeric"
    			  onChangeText={(dis)=>setMYear(dis)}
    			/>
  			</View>
  </View>
                
				<TextInput
  				placeholder="Make (e.g Toyota)"
          placeholderTextColor="black"
				  style={{margin:10}}
          value={Makes}
          multiline={true}
				  onChangeText={(dis)=>setMakes(dis)}
				/>
        <TextInput
        value={Modle}
        style={{margin:10}}
        placeholder="Model (e.g Corolla)"
        placeholderTextColor="black"
        multiline={true}
        onChangeText={(dis)=>setModle(dis)}
        />
         
				<TextInput
        value={Colors}
        style={{margin:10}}
				placeholder="Name of Colors"
        placeholderTextColor="black"
				multiline={true}
			  onChangeText={(dis)=>setClrs(dis)}
				/>

      <TextInput
        value={id}
        style={{margin:10}}
        placeholder="ID (Unique number)"
        placeholderTextColor="black"
        multiline={true}
        onChangeText={(dis)=>setid(dis)}
        />


<TouchableOpacity onPress={()=>Submited()}>
<View style={{marginLeft:'60%',marginTop:0, backgroundColor:'purple',width:90, height:45, borderRadius:10}}>
<Text style={{fontSize:22,marginLeft:22, color:'white',fontWeight:'bold',marginTop:7}}>Next</Text>

</View>
</TouchableOpacity>
     
  	
      <StatusBar style="auto" />
    </View>
  </ScrollView>
  );  

}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:0,
    backgroundColor:'pink'
  },
  img:{
  	marginLeft:0,
  	marginTop:30,
  	width:63,
  	height:50,
  	borderRadius:15,
  	backgroundColor:"pink"
  },
  upo:{
  	flex:1,
  	fontSize:17,
  	marginTop:-5,
  	marginLeft:7,
  	color:"white",
  	fontWeight:'bold'
  },
 indiv:{
  	flex:1,
    marginLeft:51,
  	flexDirection:'row'
  },
  Input:{
backgroundColor:"white",
	  width:"85%",
	  height:50,
	  marginLeft:30,  
	  borderBottomWidth: 3,
     fontSize:19,
     color:"black",
	  marginTop:10
  },dis:{
	backgroundColor:"white",
	  borderBottomWidth: 3,
      color:'black',
      fontSize:19,
      paddingTop:0,
      height: 50,
      borderColor: "black", 
      width:'85%',height:100,marginLeft:32,marginTop:0
  }, 
     inputss: {
    //  backgroundColor:"",
	  width:130,
    marginTop:-52,
	  marginLeft:17,
	    
	  //borderBottomWidth: 3,
     
     color:"black",
}

},);
