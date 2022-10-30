import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../../global/colors'

const AppBtn = (props) => {
  return (
      <TouchableOpacity
          onPress={props.clicked}
          className={`bg-primary py-3 px-4 flex self-center rounded ${props.width} ${ props.margin}`}
      >
          <Text className="text-center" style={{ color: COLORS.txtWhite }} >{props.label}</Text>
    </TouchableOpacity>
  )
}

export default AppBtn