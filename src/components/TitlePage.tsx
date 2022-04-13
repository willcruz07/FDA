import { useFonts } from 'expo-font';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Colors } from '../styles/colors';

interface TitleProps {
    title: string;
}

export const TitlePage = ({ title }: TitleProps) => {
    const [fontsLoaded] = useFonts({
        "montserrat-800": require("../assets/fonts/montserrat-800.ttf"),                
    });

    return (
        <>
            {fontsLoaded && (
                <Text style={styles.title}>
                    {title}
                </Text>
            )}
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        alignSelf: 'center',
        textAlign: 'center',
        fontFamily: 'montserrat-800',                  
        color: Colors.white,   
        
        textShadowOffset: { width: 1.2, height: 1,  },
        textShadowRadius: 1,
        textShadowColor: Colors.secondary,
    },
})