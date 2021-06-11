import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcomescreen from "./screens/welcomeScreen"
import {BottomTab} from "./components/bottomTab"
import {createSwitchNavigator,createAppContainer} from "react-navigation"
import {AppDrawerNavigator} from "./components/appDrawerNav"

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  )
}
}

const SwitchNavigator=createSwitchNavigator({
  Welcomescreen:{screen:Welcomescreen},
  AppDrawerNavigator:{screen:AppDrawerNavigator},
  BottomTab:{screen:BottomTab}
})
const AppContainer=createAppContainer(SwitchNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
