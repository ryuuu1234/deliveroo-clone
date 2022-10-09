import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    lang,
    lat,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow-sm">
      <Image 
        source={{
            uri:imgUrl,
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="p-3">
        <Text className="text-lg font-bold">{title}</Text>
        <View className="flex-row items-center space-x-2">
            <StarIcon color="orange" size={20} />
            <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text> ~ {genre}
            </Text>
        </View>

        <View className="flex-row items-center space-x-2">
            <MapPinIcon size={20} color="gray" opacity={0.4} />
            <Text className="text-gray-500">Near By ~ {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard