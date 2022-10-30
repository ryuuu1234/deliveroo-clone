
import React, { useLayoutEffect } from 'react'
import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { AdjustmentsHorizontalIcon, ChevronDownIcon, MagnifyingGlassIcon, UserIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeatureCategories from '../components/FeatureCategories';

const BelajarHomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])


  return (
    <SafeAreaView  className="bg-white">
        {/* Header */}
      <View className="flex-row items-center mx-4 space-x-2 mb-4 pt-5">
        <Image 
            source={{uri:'https://picsum.photos/200'}}
            className="h-8 w-8 bg-gray-300 rounded-full"
        />
        <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs -mb-1">Deliver Now</Text>
            <View className="flex-row items-center"> 
                <Text className="font-bold text-lg mr-1">Current Location</Text>
                <ChevronDownIcon  size={18} color="#065f46"/>
            </View>
        </View>

        <UserIcon size={30} color="#065f46" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 mx-4 pb-2">
        <View className="flex-row items-center flex-1 space-x-2 bg-gray-200 px-2 py-1">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput placeholder='Restourant Mboh' keyboardType='default'/>
        </View>
        <AdjustmentsHorizontalIcon size={20} color="#065f46" />
      </View>

      {/* content */}
      <ScrollView className="bg-gray-200">
        <Categories />

      {/* Feature */}

        <FeatureCategories
          id="123"
          title="Featured Category"
          description="Paid from our partners"
        />
      {/* Feature */}

        <FeatureCategories
          id="1234"
          title="Food Delivery"
          description="So good so far"
        />
      {/* Feature */}

        <FeatureCategories
          id="1235"
          title="Wes Mboh"
          description="Sayonaraaa React"
        />

        <View className="pb-32"></View>

      </ScrollView>


    </SafeAreaView>
  );
};

export default BelajarHomeScreen