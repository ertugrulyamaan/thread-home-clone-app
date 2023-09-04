import { View, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { Ionicons, Feather, AntDesign, FontAwesome } from "@expo/vector-icons";


export default function BottomIcons() {
    const currentTheme = useColorScheme()
    const iconColor =currentTheme === 'dark' ? 'white' : 'black'
  return (
    <View style={styles.container}>
      <FontAwesome name='heart-o' size={20} color={iconColor}/>
      <Ionicons name='chatbubble-outline' size={20} color={iconColor}/>
      <AntDesign name='retweet' size={20} color={iconColor}/>
      <Feather name='send' size={20} color={iconColor}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap:10
    }
})
