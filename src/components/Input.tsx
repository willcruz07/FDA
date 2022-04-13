import { useFonts } from 'expo-font';
import React from 'react';
import { StyleSheet, Text, TextInput, View, TextInputProps } from 'react-native';
import { Colors } from '../styles/colors';

interface InputProps extends TextInputProps {
    title: string;    
}


export const Input = React.forwardRef<TextInput, InputProps>(({title, ...rest}: InputProps, ref: React.ForwardedRef<TextInput>) => {
    const [fontsLoaded] = useFonts({
        "montserrat-800": require("../assets/fonts/montserrat-800.ttf"),                
    });

        return (
            <View style={styles.containerInput}>
                {fontsLoaded && (<Text style={styles.title}>{`${title}:`}</Text>)}
                <TextInput {...rest} style={styles.input} ref={ref} />
            </View>
        )
    }
);

const styles = StyleSheet.create({
    containerInput: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
        width: '100%',
        height: 40,
        backgroundColor: Colors.white,
        borderRadius: 20,        
        marginBottom: 16,
       
        shadowColor: Colors.black2,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    title: {
        fontFamily: 'montserrat-800',
        color: Colors.black2,
    },

    input: {
        flex: 1,
        marginLeft: 4,
    }
})