import React, { useLayoutEffect } from "react";

import { View, Text, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native'
import Input from "../components/global/Input";


const LoginScreen = props => {
    const navigation = useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])
    return (
        <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
            <View className="px-4">
                <Input />
            </View>
        </ScrollView>
    )
}


export default LoginScreen