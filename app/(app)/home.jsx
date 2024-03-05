import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/authContext'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-web';
import { StatusBar } from 'expo-status-bar';
import ChatList from '../../components/ChatList';
import { getDocs, query, where } from 'firebase/firestore';
import { userRef } from '../../firebaseConfig';
const Home = () => {
  const {logout,user} = useAuth();
  const [users, setUsers] = useState([''])
  useEffect(() => {
    if(user?.uid)
    getUsers()
  },[])

  const getUsers = async () => {
    const q = query(userRef, where('userId', '!=',user?.uid))

    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach(doc => {
      data.push({...doc.data()})
    });
    setUsers(data)
  }
  // const nama = user.username;
  return (
    <View style={{flex:1,backgroundColor:"white"}}>
      <StatusBar style="light" />
      {
        users.length > 0 ? (
          <ChatList currentUser={user} users={users}/>
        ) : (
          <View style={{marginTop:90,alignItems:'center'}}>
            <ActivityIndicator size="large"/>
          </View>
        )
      }
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})