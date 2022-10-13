import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const RestauranScreen = () => {

    const {params: {
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
    }} = useRoute()

  return (
    <View className="bg-green-500 flex-1 align-middle items-center justify-center">
      <Text>RestauranScreen</Text>
    </View>
  )
}

export default RestauranScreen