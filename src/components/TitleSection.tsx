import { useFonts } from 'expo-font';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../styles/colors';

interface TitleSectionProps {
    title: string;
}

export const TitleSection = ({title}: TitleSectionProps) => {
    const [fontsLoaded] = useFonts({
        "poppins-700": require("../assets/fonts/poppins-700.ttf"),                
    });

    return (
        <>
            {fontsLoaded && (
                <View style={styles.container}>
                    <View style={styles.line}/>
                        <Text style={styles.title}>{title}</Text>
                    <View style={styles.line}/>
                </View>
            )}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row', 
        marginTop: 32,       
        marginBottom: 24
    },

    title: {
        alignSelf: 'center',
        color: Colors.white,   
        marginHorizontal: 16,
        fontSize: 20,
        fontFamily: 'poppins-700',                  
        textAlign: 'center',
        
        textShadowOffset: { width: 1.3, height: 1,  },
        textShadowRadius: 1,
        textShadowColor: Colors.secondary,
    },

    line: {
        borderRadius: 16,
        flex: 1,
        height: 2,
        backgroundColor: Colors.white,

        textShadowOffset: { width: 2, height: 2},
        textShadowRadius: 1,
        textShadowColor: Colors.secondary,
    },
})