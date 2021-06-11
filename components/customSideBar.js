import React from "react"
import {StyleSheet,TouchableOpacity,View,Text} from "react-native"
import {DrawerItems} from "react-navigation-drawer"
import firebase from "firebase"
import Welcomescreen from "../screens/welcomeScreen"

export default class CustomSideBar extends React.Component{
  render(){
      return(
          <View style={{marginTop:50}}>
              <DrawerItems {...this.props}/>
              <TouchableOpacity style={{borderRadius:15,backgroundColor:"red",width:100,height:30,alignItems:"center"}} onPress={()=>{
                  firebase.auth().signOut().then((r5)=>{
                    alert("User Logged Out")
                    this.props.navigation.navigate("Welcomescreen")
                  })
              }}>
                  <Text style={{textAlign:"center"}}>Logout</Text>
              </TouchableOpacity>
          </View>
      )
  }
}