import React, { useLayoutEffect } from "react";

import { View, Text, ScrollView, Image, Alert } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native'
import AppInput from "../components/global/AppInput";
import AppBtn from "../components/global/AppBtn";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../global/colors";
import tw from '../global/tw';
import AppLoader from "../components/global/AppLoader";


const LoginScreen = props => {
    const navigation = useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    }, [])
    
    const [loading, setLoading] = React.useState(false)

    const login = () => {
        setLoading(true)
        setTimeout(() => {
            Alert.alert('Error','Success Brooo')
            setLoading(false)
        },3000)
        
    }
    return (
        <View className="min-h-screen flex flex-col">
            <AppLoader visible={loading} />
            <View className="">
                <LinearGradient
                    colors={[tw.color('secondary'), tw.color('primary')]}
                    start={{ x: 1, y: 0 }}
                    end={{x:1,y:1}}
                    className="h-64 w-full rounded-tl-[180px] rounded-br-[160px] inset-0 flex justify-center items-center ">
                    <Image
                        className="w-16 h-16 mb-2"
                        source={require("../assets/static/logo-rsud.png")}
                    />
                    <Text className="text-white">UOBK RSUD MOHAMMAD SALEH</Text>
                    <Text className="text-white font-bold text-xl">SIMRS</Text>
                    <Text className="text-white text-xs">Sistem Informasi Management Rumah Sakit</Text>
                </LinearGradient>
            </View>
            
            <View className="flex-grow pt-4">
                <View className="p-8">
                    <AppInput icon="email" placeholder="Email" />
                    <AppInput icon="key" placeholder="Password" password/>
                    <AppBtn label="Login" width="w-full" margin="mt-4"
                        clicked={() => {
                            login();
                        }}
                    />
                </View>
            </View>
            <View className="rounded-tl-full overflow-hidden left-64">
                <LinearGradient className="h-24 ring-warning ring-inset"
                    colors={[tw.color('secondary'), tw.color('primary')]}
                    start={{ x: 1, y: 0 }}
                    end={{x:1,y:0.9}}
                />
            </View>
        </View>
    )
}


export default LoginScreen