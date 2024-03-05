import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
const ios = Platform.OS == "ios";
const CustomKeyboardView = ({ children, inChat }) => {
  // let kavConfig = {};
  // let scrollViewConfig = {};
  // if (inChat) {
  //   kavConfig = { keyboardVerticalOffset: 90 };
  //   scrollViewConfig = { contenContainerStyle: { flex: 1 } };
  // }
  return (
    <KeyboardAvoidingView
      behavior={ios ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={90}
    >
      <ScrollView 
      style={{ flex: 1 }} 
      bounces={false} 
      contenContainerStyle={{ flex: 1 } }
      showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CustomKeyboardView;

const styles = StyleSheet.create({});
