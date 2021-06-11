import React from "react"
import {TouchableOpacity,View,Text,TextInput} from "react-native"
import firebase from "firebase"
import db from "../config.js"

export default class UserDetails extends React.Component{
    constructor(){
        super()
        this.state={
            userId:firebase.auth().currentUser.email,
            userName:"",
            recieverId:this.props.navigation.getParam("details")["email"],
            recieverContact:"",
            bookName:this.props.navigation.getParam("details")["bookName"],
            reason:this.props.navigation.getParam("details")["reason"]
        }
    }
    getUserDetails(){
        db.collection("Users").where("email","==",this.state.recieverId).get()
        .then((snapshot)=>{
           snapshot.forEach((doc)=>{
               this.setState({
                   userName:doc.data().name,
                   recieverContact:doc.data().contact
               })
           })
        })
    }
    componentDidMount(){
        "this.getUserDetails()"
    }
  render(){
      return(
          <View>
              <Text>{this.state.userName}</Text>
              <Text>{this.state.recieverContact}</Text>
              <Text>{this.state.bookName}</Text>
              <Text>{this.state.reason}</Text>
          </View>
      )
  }
}