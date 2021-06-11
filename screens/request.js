import React from "react"
import {View,Text,TouchableOpacity,TextInput} from "react-native"
import firebase from "firebase"
import db from "../config"
import MyHeader from "../components/myHeader"

export default class Request extends React.Component{
    constructor(){
        super()
        this.state={
            userId:firebase.auth().currentUser.email,
            bookName:"",
            reason:"",
            name:""
        }
    }
    render(){
       return(
           <View>
               <MyHeader navigation={this.props.navigation}/>
               <Text>This is the Request screen</Text>
               <TextInput style={{borderWidth:3,width:200,height:30}}
                onChangeText={(text)=>{this.setState({
                    bookName:text
                })}}/>
                <TextInput style={{borderWidth:3,width:200,height:30}}
                onChangeText={(text)=>{this.setState({
                    reason:text
                })}}/>
                <TouchableOpacity 
                onPress={()=>{
                    db.collection("request").doc(this.state.userId).set({
                        bookName:this.state.bookName,
                        reason:this.state.reason,
                        userId:firebase.auth().currentUser.email,
                        
                    })
                }}>
                    <Text>Submit</Text>
                </TouchableOpacity>
           </View>
       )
    }
}