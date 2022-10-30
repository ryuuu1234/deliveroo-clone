import React from 'react'
import { View, Text, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import COLORS from '../../global/colors'

const AppInput = ({
    label,
    placeholder,
    icon,
    error,
    password,
    onFocus = () => {},
    ...props
}) => {
  return (
    <View className="my-1">
      <View className="flex-row items-center space-x-1 bg-gray-light px-2 py-1 rounded-md">
        <Icon
          name={icon}
          size={20}
          color={COLORS.txtgray}
        />
        <TextInput className="flex-1" placeholder={placeholder} keyboardType='default' />
      </View>
    </View>
  )
}

export default AppInput