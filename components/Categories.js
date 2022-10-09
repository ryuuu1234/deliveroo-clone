import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView 
        contentContainerStyle={{
            paddingHorizontal:15,
            paddingTop:10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
    >


        {/* CategoryCard */}

        <CategoryCard imgUrl="https://picsum.photos/200/300" title="Lorem Ipsum" />
        <CategoryCard imgUrl="https://picsum.photos/200/300" title="Lorem Ipsum 2" />
        <CategoryCard imgUrl="https://picsum.photos/200/300" title="Lorem Ipsum 3" />
        <CategoryCard imgUrl="https://picsum.photos/200/300" title="Lorem Ipsum 4" />
        <CategoryCard imgUrl="https://picsum.photos/200/300" title="Lorem Ipsum 5" />
        <CategoryCard imgUrl="https://picsum.photos/200/300" title="Lorem Ipsum 6" />

    </ScrollView>
  )
}

export default Categories