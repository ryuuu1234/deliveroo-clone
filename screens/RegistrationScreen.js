import { View, Text, ScrollView, TouchableWithoutFeedback, Keyboard, FlatList, Pressable } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';

import tw from '../global/tw';
import AppInput from '../components/global/AppInput';

const RegistrationScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    }, [])
  
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])

  const onSearch = async (txt) => {
    setSearch(txt)
    if(txt.length === 0) setData([])
    if (txt.length > 2) {
      let api = `https://xenter.my.id/api/v2/data/pegawai?q=${txt}&limit=${10}`
      const resp = await fetch(api);
      if (resp) {
        const dataJson = await resp.json();
        if (dataJson.length > 0) setData(dataJson)
      }
    }
  }

  return (
    // <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
      <SafeAreaView style={tw`bg-white flex-1`}>
        {/* <ScrollView> */}
            <View className="p-4">
              <Text className="text-xl font-bold">Register</Text>
              <Text className="text-gray-400">register aplikasi</Text>
              <View style={tw`my-4`}>
                <AppInput placeholder="Cari Data Pegawai" label="search" icon="account-search-outline"
                  value={search}
                  changed={(val)=>onSearch(val)}
                />
                    {/* List Autocomplete */}
                  <FlatList
                    data={data}
                    renderItem={({ item, index }) => (
                      <Pressable onPress={()=> console.log("parsing data" + JSON.stringify(item))}>
                        <View style={tw`my-1`}>
                          <Text>{item.nama}</Text>
                        </View>
                      </Pressable>
                    )}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                  />
              </View>
            </View>
          {/* </ScrollView> */}
        </SafeAreaView>
      // </TouchableWithoutFeedback>
  )
}

export default RegistrationScreen