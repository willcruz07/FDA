import { useFonts } from 'expo-font';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../styles/colors';
import iconNew from '../assets/img/icons/new/akar-icons_edit.png'
import iconHistory from '../assets/img/icons/history/icon-park_history-query.png'
import iconSettings from '../assets/img/icons/settings/eva_settings-2-outline.png'

interface IButtonProps {
    title: string;
    icon: 'new' | 'history' | 'settings',
    onAction: () => void;
}

export const ButtonInitial: React.FC<IButtonProps> = ({onAction, icon, title }) => {
    const [fontsLoaded] = useFonts({
        "montserrat-800": require("../assets/fonts/montserrat-800.ttf"),                
    });

    const getIcon = () => {
        switch (icon) {
            case 'new':
                return iconNew;                    
            case 'history':
                return iconHistory;   
            
            case 'settings':
                return iconSettings;               
        }
    }

    return (            
        <TouchableOpacity style={styles.container} onPress={onAction}>        
            <View style={styles.containerIcon}>
                {fontsLoaded && (<Image source={getIcon()} style={styles.imageIcon} />)}
            </View>
            {fontsLoaded && (<Text style={styles.buttonTitle}>{title}</Text>)}        
        </TouchableOpacity>    
        
    )
}

export const styles = StyleSheet.create({
    buttonTitle: {
        fontFamily: 'montserrat-800',
        color: Colors.white,
    },

    container: {
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: Colors.primary,
        flexDirection: 'row',        
        height: 64,
        marginBottom: 24,
        padding: 14,
        width: '100%',        
    },

    containerIcon: {
        alignItems: 'center',
        backgroundColor: Colors.secondary,        
        borderRadius: 24,
        marginRight: 8,
        justifyContent: 'center',
        height: 40,
        width: 40,
    },

    imageIcon: {
        width: 24,
        height: 24,
    },
})