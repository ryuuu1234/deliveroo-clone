import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import Input from '../components/global/Input';

const RegistrationScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])

  return (
    <SafeAreaView className="bg-white flex-1 justify-center items-center">
      <View className="px-4">
        <Text className="text-xl font-bold">Register</Text>
        <Text className="text-gray-400">register aplikasi</Text>
        <Input label="email" />
      </View>
    </SafeAreaView>
  )
}

export default RegistrationScreen