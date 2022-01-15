import React, { useEffect, createRef, useState } from 'react'
import { Animated, View, StyleSheet, Text, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const Loader = () => {
    let animatedValue = new Animated.Value(0);
    let currentValue = 0;

    const logo = require('../assets/logo.png')

    animatedValue.addListener(({value}) => {
        currentValue = value
    })

    const setInterpolate = animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['180deg', '360deg']
    })

    const rotateYAnimatedStyle = {
        transform: [{ rotateY: setInterpolate }]
    }

    const flipAnimation = () => {
        if (currentValue >= 90) {
            Animated.timing(animatedValue, {
                toValue: 0,
                useNativeDriver: false,
                duration: 800
            }).start(() => flipAnimation())
        } else {
            Animated.timing(animatedValue, {
                toValue: 180,
                useNativeDriver: false,
                duration: 800
            }).start(() => flipAnimation())
        }
    }

    useEffect(() => {
        flipAnimation()
    }, [])
    
    return (
        <SafeAreaView style={styles.container}>
            <Animated.Image
                source={logo}
                style={[rotateYAnimatedStyle, styles.imageStyle]}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        borderRadius: 6,
        resizeMode: 'contain',
        width: 200,
        height: 100,
    }
})

export default Loader;