import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import iconBack from '../assets/img/icons/back/icon-park_back.png';
import { StackParams } from '../models/stackParams';

export const GoBack: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={iconBack} style={{width: 32, height: 32}}/>
        </TouchableOpacity>
    )
}