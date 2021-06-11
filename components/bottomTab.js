import {createBottomTabNavigator} from "react-navigation-tabs"
import Donate from "../screens/donate"
import Request from "../screens/request"
import React from "react"
import {AppStackNavigator} from "./appStackNavigator"

export const BottomTab=createBottomTabNavigator({
 donate:{screen:AppStackNavigator},
 request:{screen:Request}
})