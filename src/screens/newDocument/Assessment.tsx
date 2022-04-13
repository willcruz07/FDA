import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { CheckBox } from '../../components/CheckBox';
import { Input } from '../../components/Input';
import { TitleSection } from '../../components/TitleSection';

export const Assessment = () => {
    const [doenca, setDoenca] = useState(false);
    const [fumante, setFumante] = useState(false);
    const [alergia, setAlergia] = useState(false);
    const [cosmetico, setCosmetico] = useState(false);
    const [gestante, setGestante] = useState(false);
    const [queloide, setQueloide] = useState(false);
    const [cancer, setCancer] = useState(false);
    const [botox, setBotox] = useState(false);

    return (
        <View>
            <TitleSection title="Avaliação"/>
            <CheckBox title="Doença dermatológica?" onCheck={() => setDoenca(!doenca)} value={doenca} />
            {doenca && (                
                <Input title="Qual"/>                  
            )}

            <CheckBox title="É fumante?" onCheck={() => setFumante(!fumante)} value={fumante} />

            <CheckBox title="Possui alguma alergia?" onCheck={() => setAlergia(!alergia)} value={alergia} />
            {alergia && (                
                <Input title="Qual"/>                  
            )}

            <CheckBox title="Usa algum cosmético no rosto?" onCheck={() => setCosmetico(!cosmetico)} value={cosmetico} />
            {cosmetico && (                
                <Input title="Qual"/>                  
            )}

            <CheckBox title="Gestante / Amamentando?" onCheck={() => setGestante(!gestante)} value={gestante} />

            <CheckBox title="Queloide?" onCheck={() => setQueloide(!queloide)} value={queloide} />

            <CheckBox title="Cancer" onCheck={() => setCancer(!cancer)} value={cancer} />

            <CheckBox title="Botox nos últimos 4 meses" onCheck={() => setBotox(!botox)} value={botox} />




        </View>
    )
}