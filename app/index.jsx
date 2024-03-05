import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StartPage = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',alignContent:'center'}}>
      <ActivityIndicator style={{justifyContent:'center',alignItems:'center'}} size="large" color="#7179ef" />
    </View>
  )
}

export default StartPage

const styles = StyleSheet.create({})