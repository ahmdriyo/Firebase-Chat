import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const InputPassword = ({ placeholder,onChangeText,keyboardType,value }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        secureTextEntry={!passwordVisible}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholderTextColor='#7B6BA8'
      />
      <TouchableOpacity style={styles.iconContainer} onPress={togglePasswordVisibility}>
        <MaterialCommunityIcons name={passwordVisible ? 'eye-off' : 'eye'} size={24} color="#C0BBFF" />
      </TouchableOpacity>
    </View>
  );
};
{/* <View style={{height: hp(7),width: wp(75),borderWidth: 2,borderColor: "grey",}}
className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl"
>
<Entypo name="lock" size={24} color="gray" />
<TextInput
  className="font-medium text-neutral-600"
  placeholder="Password"
  secureTextEntry={true}
  placeholderTextColor={"gray"}
/>
</View> */}
const styles = StyleSheet.create({
  container: {
    width:'75%',
    flexDirection: 'row',
    alignItems: 'center',
    height:45,
    borderWidth:2,
    borderRadius:10,
    opacity:0.7,
    borderColor:'#C5B6F9',
    paddingHorizontal: 1,
    marginTop: 5,
  },
  textInput: {
    flex: 1,
    padding: 10,
  },
  iconContainer: {
    padding: 10,
  },
});

export default InputPassword;
