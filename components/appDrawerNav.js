import React from "react"
import {View} from "react-native"
import {createDrawerNavigator} from "react-navigation-drawer"
import CustomSideBar from "../components/customSideBar"
import {BottomTab} from "../components/bottomTab"
import SettingScreen from "../screens/settingScreen"

export const AppDrawerNavigator=createDrawerNavigator({
    Home:{
      screen:BottomTab
    },
    Acount:{
       screen:SettingScreen
     }},
    {
      contentComponent:CustomSideBar
    },
    {initialRouteName:"Home"}
)