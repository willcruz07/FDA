import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Background } from '../../components/Background';
import { GoBack } from '../../components/GoBack';
import { TitlePage } from '../../components/TitlePage';
import { TitleSection } from '../../components/TitleSection';
import AppIntroSlider from "react-native-app-intro-slider";
import { Customer } from './Customer';
import { Assessment } from './Assessment';
import { Execution } from './Execution';
import { TermsOfResponsibility } from './TermsOfResponsibility';
import { Procedure } from './Procedure';
import { Colors } from '../../styles/colors';
import Next from "../../assets/img/icons/next/ic_round-navigate-next.png";
import Previous from "../../assets/img/icons/previous/ic_round-navigate-next.png";
import { useFonts } from 'expo-font';


const data = [
    { id: 1, title: "Dados do cliente" },
    { id: 2, title: "Avaliação" },
    { id: 3, title: "Procedimento" },
    { id: 4, title: "Termo de responsabilidade" },
    { id: 5, title: "Execução" },
];

export const NewDocument = () => {
    const [fontsLoaded] = useFonts({
        "montserrat-800": require("../../assets/fonts/montserrat-800.ttf"),                
    });

    const renderItem = ({item}: any) => {
        return (
            <View style={styles.container}> 
                <ScrollView style={styles.containerScroll}>
                    {item.id == 1 ? (                    
                        <Customer />
                    ): item.id == 2 ? (
                        <Assessment />
                    ): item.id == 3 ? (
                        <TermsOfResponsibility />
                    ): item.id == 4 ? (
                        <Procedure />
                    ): item.id == 5 ? (
                        <Execution />
                    ): null}
                </ScrollView>                               
            </View>            
        )
    }

    return (       
        <Background>  
            <GoBack />    
            <TitlePage title="Nova ficha"/>                
            <AppIntroSlider 
                keyExtractor={item => item.id.toString()}
                data={data}
                renderItem={renderItem}                
                showSkipButton={false}
                showPrevButton={true}
                showNextButton={true}
                showDoneButton={false}                
                activeDotStyle={{
                    backgroundColor: Colors.secondary,
                    transform: [{scale: 1.6}]
                }}
                renderNextButton={() => (
                    <View style={styles.containerButton}>
                        {fontsLoaded && <Text style={styles.titleButton}>Próximo</Text>}
                        <Image source={Next}/>                     
                    </View>
                )}
                renderPrevButton={() => (
                    <View style={styles.containerButton}>
                        <Image source={Previous}/>                                                                   
                        {fontsLoaded && <Text style={styles.titleButton}>Anterior</Text>}
                    </View>
                )}
            />      
        </Background>        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,      
    },

    containerScroll: {
        marginBottom: 64,
    },

    containerButton: {      
        flexDirection: 'row',         
        alignItems: 'center',        
        height: 44,
        width: '100%'
                      
    },

    titleButton: {
        color: Colors.gray,
        fontFamily: 'montserrat-800',
    },
});
