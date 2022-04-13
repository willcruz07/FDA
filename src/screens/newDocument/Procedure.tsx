import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { CheckBox } from '../../components/CheckBox';
import { TitleSection } from '../../components/TitleSection';

export const Procedure = () => {
    const [sobrancelha, setSobrancelha] = useState(false);
    const [esfumada, setEsfumada] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [fioAfio, setFioAfio] = useState(false);

    const [olhos, setOlhos] = useState(false);
    const [inferior, setInferior] = useState(false);
    const [superior, setSuperior] = useState(false);

    const [boca, setBoca] = useState(false);
    const [contorno, setContorno] = useState(false);
    const [preenchimento, setPreenchimento] = useState(false);


    return (
        <View>
            <TitleSection title="Procedimento"/>
            <View style={{marginBottom: 24}}>
                <CheckBox title="Sobrancelha" onCheck={() => setSobrancelha(!sobrancelha)} value={sobrancelha} large/>
                {sobrancelha && (
                    <>
                        <CheckBox title="Esfumada" onCheck={() => setEsfumada(!esfumada)} value={esfumada} marginLeft={32}/>
                        <CheckBox title="Fio a fio" onCheck={() => setShadow(!shadow)} value={shadow} marginLeft={32}/>
                        <CheckBox title="shadow" onCheck={() => setFioAfio(!fioAfio)} value={fioAfio} marginLeft={32}/>
                    </>
                )}
            </View>

            <View style={{marginBottom: 24}}>
            <CheckBox title="Olhos" onCheck={() => setOlhos(!olhos)} value={olhos} large/>
                {olhos && (
                    <>
                        <CheckBox title="inferior" onCheck={() => setInferior(!inferior)} value={inferior} marginLeft={32}/>
                        <CheckBox title="superior" onCheck={() => setSuperior(!superior)} value={superior} marginLeft={32}/>                    
                    </>
                )}
            </View>

            <View style={{marginBottom: 24}}>
            <CheckBox title="Boca" onCheck={() => setBoca(!boca)} value={boca} large/>
                {boca && (
                    <>
                        <CheckBox title="Contorno" onCheck={() => setContorno(!contorno)} value={contorno} marginLeft={32}/>
                        <CheckBox title="Preenchimento" onCheck={() => setPreenchimento(!preenchimento)} value={preenchimento} marginLeft={32}/>                    
                    </>
                )}
            </View> 
        </View>
    )
}