import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import { Background } from '../../assets';

const Splash = ({ navigation }) => {
        useEffect(() => {
            setTimeout(() => {
                navigation.replace('MainApp');
            }, 3000)
        }, [navigation]);
  return (
    <ImageBackground source={Background} style={styles.background}>

    </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({
   background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
   }
})