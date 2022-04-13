import { useFonts } from 'expo-font';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Check from '../assets/img/icons/check/ci_check-bold.png';
import UnCheck from '../assets/img/icons/un-check/un-check.png';
import { Colors } from '../styles/colors';

interface CheckProps {
    title: string;
    value: boolean;
    onCheck: () => void;
    marginLeft?: number;
    marginBottom?: number
    large?: boolean;
}

export const CheckBox: React.FC<CheckProps> = ({title, value, onCheck, marginBottom, marginLeft, large}) => {
    const [fontsLoaded] = useFonts({
        "montserrat-800": require("../assets/fonts/montserrat-800.ttf"),                
    });

    return (
        <TouchableOpacity style={[
            styles().checkContainer, 
            { marginBottom: marginBottom ? marginBottom : 8, 
              marginLeft: marginLeft ? marginLeft : 16
            }]} onPress={onCheck}>
            <Image source={value ? Check : UnCheck} />
            {fontsLoaded && <Text style={[styles(value).title, large ? { fontSize: 18 }: {}]}>{title}</Text>}
        </TouchableOpacity>
    )
}

const styles = (value?: boolean) => StyleSheet.create({
    checkContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 8,
        marginLeft: 16,                        
    },

    title: {
        color: Colors.black2,
        fontFamily: 'montserrat-800',
        marginLeft: !value ? 8 : 0,
        
    }
});