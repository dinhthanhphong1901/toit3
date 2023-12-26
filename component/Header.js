//rgba(0,0,0,0.2)->inactive
import React from "react";
import {View,Text,TouchableOpacity,Image} from "react-native"
import Swiper from "react-native-swiper";
function Header(props){
    return (<View style={{
      marginTop:20,
      flex:20,
      width:'100%',
      marginBottom:10,
      justifyContent: 'center',
      alignItems: 'center',
      
    }}   >

      <Text style={{
        color: "black",
        backgroundColor: 'green'
      }}>Open up App</Text>



    </View>);
}
export default Header
