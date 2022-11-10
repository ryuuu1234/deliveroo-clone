import React from 'react'
import { View, Text, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import COLORS from '../../global/colors'
import tw from '../../global/tw'

const AppInput = ({
    label,
    icon,
    error,
    password,
    onFocus = () => {},
    ...props
}) => {
  const [isFocused, setIsFocused] = React.useState(false)
  const [hidePassword, setHidePassword] = React.useState(password)
  return (
    <View className="my-1">
      {
        label &&
        <Text style={tw`text-xs text-gray mb-1`}>{ label }</Text>
      }
      <View className="flex flex-row items-center space-x-1 bg-gray-light px-2 py-1 rounded-md border"
        style={tw`${error ? `border-negative` : isFocused ? `border-secondary` : `border-gray`}`}
      >
        <Icon
          name={icon}
          size={20}
          color={COLORS.txtgray}
        />
        <TextInput
          secureTextEntry={hidePassword}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true)
          }}

          onBlur={() => {
            setIsFocused(false)
          }}

          onChangeText ={props.changed}

          className="flex-1"
          {...props}
        />
        {password && (
          <Icon
            onPress={()=> setHidePassword(!hidePassword)}
            name={ hidePassword? "eye-outline": "eye-off-outline"}
            size={18} color={tw.color('gray')}
          />
        )}
      </View>
      {error && (
        <Text style={tw`text-xs text-negative`}>{ error }</Text>
      )}
    </View>
  )
}

export default AppInput