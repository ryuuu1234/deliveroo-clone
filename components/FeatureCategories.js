import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowLongRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeatureCategories = ({ id, title, description}) => {
  return (
    <View>
      <View className="flex-row items-center justify-between px-4 pt-4">
        <View>
        <Text className="text-lg font-bold">{title}</Text>
        <Text className="text-gray-500 text-xs -mt-1">{description}</Text>
        </View>
        <ArrowLongRightIcon size={20} color="#065f46" />
      </View>

      {/* ScrollView */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        className="px-4 pt-2"
      >
        {/* card */}
        <RestaurantCard 
            id={123}
            imgUrl="https://picsum.photos/200/300"
            title="Dummy Data"
            rating={4.5}
            genre="Japaneese"
            address="Probolinggo"
            short_description="Deskripsi restaurant"
            dishes={[]}
            lang={20}
            lat={0}
        />
        <RestaurantCard 
            id={123}
            imgUrl="https://picsum.photos/200/300"
            title="Dummy Data"
            rating={4.5}
            genre="Japaneese"
            address="Probolinggo"
            short_description="Deskripsi restaurant"
            dishes={[]}
            lang={20}
            lat={0}
        />
        <RestaurantCard 
            id={123}
            imgUrl="https://picsum.photos/200/300"
            title="Dummy Data"
            rating={4.5}
            genre="Japaneese"
            address="Probolinggo"
            short_description="Deskripsi restaurant"
            dishes={[]}
            lang={20}
            lat={0}
        />
      </ScrollView>
    </View>
  )
}

export default FeatureCategories