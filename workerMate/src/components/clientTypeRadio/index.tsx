import colors from "@/constants/colors";
import { useState } from "react";
import { View } from "react-native";
import { RadioButton, Text } from "react-native-paper";
import { ClientTypeRadioStyle } from "./style";

export default function ClientTypeRadio() {

    const [checked, setChecked] = useState('cpf');

    return (
        <View style={ClientTypeRadioStyle.container}>
            <View style={ClientTypeRadioStyle.content}>
                <RadioButton 
                    value="cpf"
                    status={ checked === 'cpf' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('cpf')}
                    color={colors.primary}
                />
                <Text variant='bodySmall'>Pessoa física</Text>
            </View>
            <View style={ClientTypeRadioStyle.content}>
                <RadioButton 
                    value="cnpj"
                    status={ checked === 'cnpj' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('cnpj')}
                    color={colors.primary}
                />
                <Text variant='bodySmall'>Pessoa jurídica</Text>
            </View>
        </View>
    );
}