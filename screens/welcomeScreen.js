import React from 'react'
import {TextInput,View,TouchableOpacity,Text,Modal} from 'react-native'
import firebase from 'firebase'
import db from '../config'
import SantaAnimation from "../components/santaClause"

export default class Welcomescreen extends React.Component{
constructor(){
    super()
    this.state={
        email:"",
        password:"",
        contact:"",
        name:"",
        isModalVisible:false
    }
}
showModal=()=>{
    return( 
        <Modal
        animationType="fade"
        transparent={false}
        visible={this.state.isModalVisible}>
        <View style={{marginTop:150,justifyContent:"center",alignItems:"center",backgroundColor:"#f8be85"}}>
         <TextInput
          placeholder={"Email"}
          style={{borderWidth:3,width:200,height:30}}
          onChangeText={(data)=>{this.setState({
              email:data
          })}}/>
          <TextInput
          placeholder={"Password"}
          style={{borderWidth:3,width:200,height:30}}
          secureTextEntry={true}
          onChangeText={(data)=>{this.setState({
              password:data
          })}}/>

         <TextInput
          placeholder={"Name"}
          style={{borderWidth:3,width:200,height:30}}
          secureTextEntry={true}
          onChangeText={(data)=>{this.setState({
              name:data
          })}}/>
          
          <TextInput
          placeholder={"Contact Info"}
          style={{borderWidth:2,width:200,height:30}}
          onChangeText={(data)=>{this.setState({
              contact:data
          })}}/>
          <TouchableOpacity style={{width:100,height:30,borderWidth:3,borderRadius:20}}
          onPress={()=>{this.signUpUser()}}>
              <Text>Sign Up</Text>
          </TouchableOpacity>
          </View>
        </Modal>
        
    )
}
signUpUser=()=>{
  firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
  .then((r2)=>{
      db.collection("Users").doc(this.state.email).set({
          email:this.state.email,
          password:this.state.password,
          contact:this.state.contact,
          name:this.state.name
      })
  })
}

login=()=>{
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
    .then((r4)=>{
        alert("User Logged In")
        this.props.navigation.navigate("AppDrawerNavigator")
    })
    .catch(function (error) {
        alert(error.message)
    })
}
 render(){
     return(
         <View style={{alignSelf:"center",alignItems:"center",marignTop:100,justifyContent:"center"}}>
          
          <View style={{alignItems:"center",justifyContent:"center",marginTop:100}}>
          </View>
          {this.showModal()}
          <SantaAnimation/>
          <TouchableOpacity style={{width:100,height:30,borderWidth:3,borderRadius:20}}
          onPress={()=>{
              this.setState({
                  isModalVisible:true
              })
          }}>
              <Text>Register</Text>
          </TouchableOpacity>

          <TextInput
          placeholder={"Email"}
          style={{borderWidth:3,width:200,height:30}}
          onChangeText={(data)=>{this.setState({
              email:data
          })}}/>
          <TextInput
          placeholder={"Password"}
          style={{borderWidth:3,width:200,height:30}}
          secureTextEntry={true}
          onChangeText={(data)=>{this.setState({
              password:data
          })}}/>

        <TouchableOpacity style={{width:100,height:30,borderWidth:3,borderRadius:20}}
          onPress={()=>{this.login()}}>
              <Text>Login</Text>
          </TouchableOpacity>
         </View>
     )
 }
}