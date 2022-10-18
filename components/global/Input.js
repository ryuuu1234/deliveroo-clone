import React from 'react'
import { View, Text, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import COLORS from '../../global/colors'

const Input = ({
    label,
    iconName,
    error,
    password,
    onFocus = () => {},
    ...props
}) => {
  return (
    <View className="mb-2">
      <Text>{label}</Text>
      <View className="flex-row items-center space-x-2 bg-gray-200 px-2 py-1 rounded-sm">
        <Icon
          name="email"
          size={20}
          color={COLORS.txtgray}
        />
        <TextInput className="flex-1" placeholder='Restourant Mboh' keyboardType='default' />
      </View>
    </View>
  )
}

export default Input