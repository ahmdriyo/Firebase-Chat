import {Slot, router, useSegments} from "expo-router";

// Import your global CSS file
import "../global.css"

  import { StyleSheet, Text, View } from 'react-native'
  import React, { useEffect } from 'react'
  import { AuthContextProvider, useAuth } from "../context/authContext";
  import { MenuProvider } from 'react-native-popup-menu';
  const MainLayout = () => {
    const {isAuthenticated} = useAuth();
    const segments = useSegments();
    useEffect(() => {
      if(typeof isAuthenticated=='undefined')return;
      const inApp = segments[0]=='(app)';
      if(isAuthenticated && !inApp) {
        router.replace('home');
      } else if (isAuthenticated == false) {
        router.replace('signIn')
      }
    },[isAuthenticated])
    return <Slot />
  }
  const RootLayout = () => {
    return (
      <MenuProvider>
        <AuthContextProvider>
          <MainLayout/>
        </AuthContextProvider>
      </MenuProvider>
    )
  }
  
  export default RootLayout;
  
  const styles = StyleSheet.create({})
