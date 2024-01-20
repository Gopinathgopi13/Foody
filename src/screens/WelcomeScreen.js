import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const ring1 = useSharedValue(0);
  const ring2 = useSharedValue(0);

  const navigation = useNavigation()
  useEffect(() => {
    ring1.value = 0;
    ring2.value = 0;
    setTimeout(() => {ring1.value = withSpring(ring1.value+hp(3))}, 200);
    setTimeout(() => {ring2.value = withSpring(ring2.value+hp(3))}, 200);

    setTimeout(()=>{navigation.navigate('Home')},2000)
  }, []);
  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-red-500">
      <StatusBar style="light" />
      {/* Logo */}
      <Animated.View
        className="bg-white/20 rounded-full"
        style={{ padding: ring2 }}
      >
        <Animated.View
          className="bg-white/20 rounded-full"
          style={{ padding: ring1 }}
        >
          <Image
            source={require("../../assets/images/welcome.png")}
            style={{ width: wp(52), height: hp(25) }}
          />
        </Animated.View>
      </Animated.View>

      {/* Title */}
      <View className="flex items-center space-y-2">
        <Text
          style={{ fontSize: hp(7) }}
          className="font-bold text-white tracking-wide"
        >
          Foody
        </Text>
        <Text
          style={{ fontSize: hp(1.5) }}
          className="font-bold text-white tracking-wide"
        >
          Food is always right
        </Text>
      </View>
    </View>
  );
}
