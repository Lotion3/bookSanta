import React from "react"
import {View,Text,TextInput,TouchableOpacity, TouchableHighlight} from "react-native"
import db from "../config"
import firebase from "firebase"

export default class SettingScreen extends React.Component{
    constructor(){
        super()
        this.state={
           emailId:firebase.auth().currentUser.email,
           name:"",
           contact:""
        }
    }
    getUserDetails=()=>{
        db.collection("Users").where('email',"==",this.state.emailId).get()
        .then((snapshot)=>{
            snapshot.forEach((doc)=>{
                var data=doc.data()
                this.setState({
                    name:data.name,
                    contact:data.contact
                })
            })
        })
    }
    updateUserDetails=()=>{
        db.collection("Users").doc(this.state.emailId).update({
            name:this.state.name,
            contact:this.state.contact
        })
    }
    componentDidMount(){
        this.getUserDetails()
    }
    render(){
        return(
            <View style={{marginTop:200}}>
                <TextInput style={{borderWidth:3,width:200,height:30,alignSelf:"center"}} 
                value={this.state.name} onChangeText={(text)=>{this.setState({name:text})}}/>
                <TextInput style={{borderWidth:3,width:200,height:30,alignSelf:"center"}}
                value={this.state.contact} onChangeText={(text)=>{this.setState({contact:text})}}/>
                <TextInput style={{borderWidth:3,width:200,height:30,alignSelf:"center"}}
                value={this.state.emailId}/>
                <TouchableOpacity style={{alignItems:"center",borderRadius:15,borderWidth:2,width:100,height:30,alignSelf:"center"}} 
                onPress={()=>{this.updateUserDetails()}}>
                    <Text style={{textAlign:"center"}}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}