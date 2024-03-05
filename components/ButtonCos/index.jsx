import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ButtonCos = ({label,bgColor,color,fontFamily,onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    style={{
      width: '75%',
      height : 45,
      backgroundColor: bgColor,
      borderRadius: 11,
      borderWidth: 2,
      borderColor:"#432C81",
      alignItems:'center',
      justifyContent:'center',
      marginBottom: 8
    }}>
      <Text style={{
        fontFamily:fontFamily,
        color:color,
      }}>{label}</Text>
    </TouchableOpacity>
  )
}

export default ButtonCos

const styles = StyleSheet.create({})