import colors from "@/constants/colors";
import { View } from "react-native";
import { Text } from "react-native-paper";

export interface TotalDisplayProps {
    label: string;
    value: string;
}

export default function TotalDisplay({label, value}: TotalDisplayProps) {
    const formatValue = (text: string): string => {
        const numericValue = parseInt(text.replace(/[^0-9]/g, ''));
        if (isNaN(numericValue)) {
            return '';
        }
        const formattedValue = (numericValue / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        return formattedValue;
    }
    return (
        <View 
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '80%',
                height: 30,
                borderWidth: 1,
                borderRadius: 5,
                borderColor: colors.border,
                backgroundColor: colors.surface,
                paddingHorizontal: '5%',
                marginTop: 15,
            }}
        >
            <Text>{label}</Text>
            <Text>{formatValue(value)}</Text>
        </View>
    );
}