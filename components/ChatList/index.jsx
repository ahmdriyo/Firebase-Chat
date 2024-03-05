import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ChatItem from "../ChatItem";
import { useRouter } from "expo-router";
const ChatList = ({ users, currentUser }) => {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={users}
        contentContainerStyle={{ flex: 1, paddingVertical: 15 }}
        keyExtractor={(item) => Math.random()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <ChatItem
            noBorder={index + 1 == users.length}
            router={router}
            currentUser={currentUser}
            item={item}
            index={index}
          />
        )}
      />
    </View>
  );
};

export default ChatList;

const styles = StyleSheet.create({});
