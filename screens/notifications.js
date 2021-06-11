import React from "react"
import {View,Text,TouchableOpacity,TextInput} from "react-native"

export default class Notifications extends React.Component(){
    constructor(){
        super()
        this.state={
            userId:firebase.auth().currentUser.email,
            allNotifications:[]
        } 
        this.NotificationsRef=null
    }
    getNotifications=()=>{
        db.collection("Notifications").where('status',"==","unread")
        .where("targetUser","==",this.state.userId).onSnapshot((r4)=>{
            r4.docs.map((doc)=>{
                this.setState({
                    allNotifications:[...this.state.allNotifications,doc.data()]
                })
            })
        })
    }
    componentDidMount=()=>{
        this.getNotifications()
    }
 render(){
     return(
         <View>

         </View>
     )
 }
}