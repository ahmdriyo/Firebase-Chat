import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "expo-image";
import { blurhash } from "../../utils/common";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MenuItem from "../CustomMenuItem";
import { Feather } from "@expo/vector-icons";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { useAuth } from "../../context/authContext";
import { useRouter } from "expo-router";
const ios = Platform.OS == "ios";
const HomeHeader = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const { top } = useSafeAreaInsets();
  const handleProfile = () => {
    router.push({ pathname: "/profile"});
  };
  // console.log(ios);

  const handleLogout = async () => {
    await logout();
  };
  return (
    <View
      style={{
        paddingTop: ios ? top : top + 10,
        backgroundColor: "#5b5b62",
        flexDirection: "row",
        // borderBottomLeftRadius: 20,
        // borderBottomRightRadius: 20,
      }}
    >
      <View style={{ flex: 1, paddingBottom: 20, marginHorizontal: 20 }}>
        <Text style={{ fontSize: hp(4), fontWeight: "bold", color: "#ffffff" }}>
          Chat
        </Text>
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <Menu>
          <MenuTrigger
            customStyls={{
              triggerWrapper: {},
            }}
          >
            <Image
              style={{ height: hp(7), aspectRatio: 1, borderRadius: 100 }}
              source={user?.profileUrl}
              placeholder={blurhash}
              contentFit="cover"
              transition={1000}
            />
          </MenuTrigger>
          <MenuOptions
            customStyles={{
              optionsContainer: {
                flex:1,
                flexDirection:"row",
                borderCurve: "continuous",
                width: 'auto',
                marginTop: 30,
                marginLeft: -33,
                borderRightColor: "white",
                shadowOpacity: 0.3,
                borderRadius: 7,
              },
            }}
          >
            <MenuItem
              text="Profile"
              action={handleProfile}
              value={null}
              icon={<Feather name="user" size={20} color="black" />}
            />
            <Divider />
            <MenuItem
              text="Logout"
              action={handleLogout}
              value={null}
              icon={<Feather name="log-out" size={20} color="black" />}
            />
          </MenuOptions>
        </Menu>
      </View>
    </View>
  );
};

export default HomeHeader;
const Divider = () => {
  return (
    <View
      style={{ width: "auto", height: 1, backgroundColor: "#DADADA" }}
    ></View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});
