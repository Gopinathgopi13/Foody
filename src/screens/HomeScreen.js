import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { BellIcon } from 'react-native-heroicons/outline'


export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style='dark'/>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
        className='space-y-6 pt-14'
      >

        {/* Avatar and Bell icon */}
        <View className='mx-4 flex-row justify-between items-center mb-2'>
          <Image source={require('../../assets/images/avatar.png')} style={{height: hp(5), width: hp(5)}}/>
          <BellIcon size={hp(4)} color='gray'/>
        </View>
      </ScrollView>
    </View>
  )
}