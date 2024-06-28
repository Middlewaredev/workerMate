import colors from "@/constants/colors";
import { useState } from "react";
import { View } from "react-native";
import { RadioButton, Text } from "react-native-paper";
import { ClientTypeRadioStyle } from "./style";

export interface ClientTypeRadioProps {
    onValueChange: (value: string) => void;
}

export default function ClientTypeRadio({onValueChange}: ClientTypeRadioProps) {

    const [checked, setChecked] = useState('cpf');

    const handlePress = (value: string) => {
        setChecked(value);
        onValueChange(value);
    };

    return (
        <View style={ClientTypeRadioStyle.container}>
            <View style={ClientTypeRadioStyle.content}>
                <RadioButton 
                    value="cpf"
                    status={ checked === 'cpf' ? 'checked' : 'unchecked' }
                    onPress={() => handlePress('cpf')}
                    color={colors.primary}
                />
                <Text variant='bodySmall'>Pessoa física</Text>
            </View>
            <View style={ClientTypeRadioStyle.content}>
                <RadioButton 
                    value="cnpj"
                    status={ checked === 'cnpj' ? 'checked' : 'unchecked' }
                    onPress={() => handlePress('cnpj')}
                    color={colors.primary}
                />
                <Text variant='bodySmall'>Pessoa jurídica</Text>
            </View>
        </View>
    );
}