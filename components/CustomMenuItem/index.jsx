import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MenuOption } from "react-native-popup-menu"
const MenuItem = ({text,action,value,icon}) => {
  return (
    <MenuOption 
    onSelect={() => action(value) }>
    <View style={{justifyContent:"space-between",marginHorizontal:5,flexDirection:'row'}}>
      <Text>{icon}</Text>
      <Text style={{marginLeft:5}}>{text}</Text>
    </View>
    </MenuOption>
  )
}

export default MenuItem

const styles = StyleSheet.create({})