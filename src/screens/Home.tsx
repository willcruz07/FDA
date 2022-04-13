import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { useAppContext } from '../hook/AppContext';
import { applicationSuccess } from '../store/application/actions';
import { useNavigation } from '@react-navigation/native';
import { StackParams } from '../models/stackParams';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Background } from '../components/Background';
import { ButtonInitial } from '../components/ButtonInitial';
import { useFonts } from 'expo-font';
import { Colors } from '../styles/colors';
import { TitlePage } from '../components/TitlePage';
import { orderStart } from '../store/order/actions';


export const Home = () => {
    const { state, dispatch } = useAppContext();
    const { application } = state;

    const [fontsLoaded] = useFonts({
        "montserrat-800": require("../assets/fonts/montserrat-800.ttf"),        
        "poppins-300": require("../assets/fonts/poppins-300.ttf"),        
    });

    const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

    const [input, setInput] = React.useState('');

    const handleUpdate = () => {        
        dispatch(applicationSuccess({
            company: {
                ...application.data.company,
                name: input
            }
        }));
    }

    const handleNewDocument = () => {
        dispatch(orderStart())
        navigation.navigate('newDocument');
    }
        
    return (        
        <Background>
            {fontsLoaded && (
                <View style={styles.containerText}>
                    {/* <Text style={styles.title}>Ficha de anamnese estética</Text>             */}
                    <TitlePage title="Ficha de anamnese estética"/>
                    <View style={styles.containerSubTitle}>
                        <Text style={styles.subTitle}>Micropigmentação</Text>
                        <Text style={styles.subTitle}>Sobrancelhas</Text>
                        <Text style={styles.subTitle}>Cílios</Text>
                        <Text style={styles.subTitle}>Make</Text>
                    </View>
                </View>
            )}           
                    
            <ButtonInitial title='Nova ficha' onAction={() => handleNewDocument()} icon='new'/>                                    

            <ButtonInitial title='Histórico'onAction={() => navigation.navigate('history')} icon='history'/>           

            <ButtonInitial title='Configurações' onAction={() => navigation.navigate('settings')} icon='settings'/>
        </Background>                    
    )
}

const styles = StyleSheet.create({     

    subTitle: {
        fontFamily: 'poppins-300',
        color: Colors.white,
        marginBottom: 4,
    },

    containerSubTitle: {
        marginTop: 32,
        alignItems: 'center',
    },

    containerText: {
        marginTop: 32,
        marginBottom: 48,
    },

});