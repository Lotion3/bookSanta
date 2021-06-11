import React from "react"
import {Animated,Dimensions,Text,View} from "react-native"
import {ListItem,Icon} from "react-native-elements"
import {SwipeListView} from "react-native-swipe-list-view"
import db from "../config"

export default class SwipeList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            allNotifications:this.props.allNotifications
        }
    }
    updateMarkRead=(notification)=>{
       db.collection("Notification").doc(notification.doc_id).update({
           status:"read"
       })
    }
  render(){
      return(
          <View>
           <SwipeListView
           disableRightSwipe
           data={this.state.allNotifications}
           renderItem={this.renderItem}
           renderHiddenItem={this.renderHiddenItem}
           rightOpenValue={-Dimensions.get("window").width}
           previewRowKey={"0"}
           previewOpenValue={-40}
           previewOpenDelay={3000}
           onSwipeValueChange={this.onSwipeValueChange}
           keyExtractor={(item,index)=>index.toString()}
           />
          </View>
      )
  }
}