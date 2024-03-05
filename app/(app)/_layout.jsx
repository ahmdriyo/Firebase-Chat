import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Stack} from 'expo-router'
import HomeHeader from "../../components/HomeHeader"
import FooterComponent from "../../components/FooterComponent"
const _layout = () => {
  return (
    <Stack>
      <Stack.Screen 
      name='home'
      options={{
        header: () => <HomeHeader/>,
        // footer: () => <FooterComponent/>
      }}/>
    </Stack>

  )
}

export default _layout

const styles = StyleSheet.create({})