import { View, Text, useWindowDimensions, ActivityIndicator } from 'react-native'
import React from 'react'
import tw from '../../global/tw';

const AppLoader = ({ visible = false }) => {
    const { height, width } = useWindowDimensions();
  return (
      visible && (
          <View style={
              [
                tw`absolute z-10 bg-black/50 flex justify-center`,
                { height, width }
              ]}>
              <View style={tw`h-20 bg-white flex flex-row items-center m-16 p-4 rounded`}>
                  <ActivityIndicator size="large" color={tw.color('primary')} />
                  <Text style={tw`ml-4`}>Loading ...</Text>
              </View>
        </View>
    )
  )
}

export default AppLoader