import React from "react"
import {Header,Icon,Badge} from "react-native-elements"
import {View,Text,TouchableOpacity} from "react-native"
import db from "../config"

export default class MyHeader extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value:""
        }
    }
    getNotifications=()=>{
      db.collection("Notifications").where("status","==","unread").onSnapshot((s1)=>{
            s1.docs.map((doc)=>{
               this.setState({
                   value:doc.data().length
               })
            })
      })
    }
    componentDidMount=()=>{
        this.getNotifications()
    }
    bellIconWithBadge=()=>{
        return(
            <View>
                <Icon
                type="font-awesome"
                name="bell"
                color="white"
                size={25}/>
                <Badge
                value={this.state.value}
                containerStyle={{position:"absolute",top:-4,right:-4}}/>
            </View>
        )
    }
   render(){
    return(
       <Header
       leftComponent={<Icon
       type="font-awesome"
       name="bars"
       color="white"
       onPress={()=>{this.props.navigation.toggleDrawer()}}/>}
       centerComponent={{
           text:"Book Santa",
           style:{color:"white",fontSize:30,fontWeight:"bold"}
       }}
       backgroundColor="black"
       rightComponent={<this.bellIconWithBadge {...this.props}/>}/>
    )}}