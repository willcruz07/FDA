import React from 'react';
import { View } from 'react-native';
import { Background } from '../../components/Background';
import Sign from '../../components/Signature';
import { TitlePage } from '../../components/TitlePage';

export const Signature = () => {
    return (
        <Background>
            <TitlePage title="Assinatura"/>    
            <Sign />
        </Background>
    )
}