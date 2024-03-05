import {
  StatusBar,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions, Alert } from "react-native";
import Sign from "../assets/images/Sign.png";
import InputPassword from "../components/InputPassword";
import TextInputs from "../components/TextInput";
import ButtonCos from "../components/ButtonCos";
import { useRouter } from "expo-router";
import Loading from "../components/Loading";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { useAuth } from "../context/authContext";

const SignUpUser = ({ navigation }) => {
  // const [password, setPassword] = useState();
  // const [email, setEmail] = useState();
  const {login} = useAuth()
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handelLogin = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Sign in", "Gagal");
      return;
    }
    setLoading(true)
    const response = await login(emailRef.current, passwordRef.current);
    setLoading(false);
    // console.log('Sign In',response)
    if(!response.success){
      Alert.alert('Sign In',response.msg);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle = "whait-content" hidden = {false} backgroundColor="transparent" translucent = {true}/> */}
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#F9F8F8"
        translucent={true}
      />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View className="mb-4" style={styles.conten}>
          <Image className="mb-10" source={Sign} width="50%" height="50%"/>
          <Text className="mb-2" style={styles.textSec}>
            Sign In
          </Text>
          <View className="justify-center flex-row">
            <Loading size={7} />
          </View>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <TextInputs
              placeholder="Email"
              // onChangeText={(email) => setEmail(email)}
              onChangeText={(value) => (emailRef.current = value)}
            />
            <InputPassword
              placeholder="Password"
              // onChangeText={(password) => setPassword(password)}
              onChangeText={(value) => (passwordRef.current = value)}
            />
            <View style={{ width: "73%" }}>
              <TouchableOpacity>
                <Text style={{ color: "#432C81" }}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            {loading ? (
              <ActivityIndicator size="large" color="#432C81"/>
            ) : (
              <View style={{width:widthPercentageToDP(100),alignItems:'center'}}>
                <ButtonCos
                  onPress={handelLogin}
                  label="Sign In"
                  color="#ffffff"
                  bgColor="#432C81"
                />
              </View>
            )}
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "#82799D", marginRight: 5 }}>
              Don't have an account ?
            </Text>
            <TouchableOpacity onPress={() => router.push("signUp")}>
              <Text style={{ color: "#432C81" }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignUpUser;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  conten: {
    height: height - 38,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  text: {
    fontSize: 22,
    color: "#432C81",
  },
  textSec: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#432C81",
  },
});
