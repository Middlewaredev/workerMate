import { Icon, Text, TextInput } from "react-native-paper";
import { DefaultInputStyle } from "./style";
import { textStyle } from "@/styles/text";
import { KeyboardTypeOptions } from "react-native";

export interface DefaultInputProps {
    label: string;
    value?: string;
    icon?: string;
    secure?: boolean;
    errorMessage?: string;
    disabled?: boolean
    textChange?: (value: string) => void;
    blurFunction?: () => void;
    contentType: 'PlainText' | 'Number' | 'Email' | 'CPF' | 'CNPJ' | 'Phone' | 'MoneyValue' | 'CEP';
}

export default function DefaultInput({ label, value, icon, secure, errorMessage, disabled, textChange, blurFunction, contentType }: DefaultInputProps) {
    const getKeyboardType = (): KeyboardTypeOptions => {
        switch (contentType) {
            case 'Number':
            case 'CEP':
                return 'numeric';
            case 'Email':
                return 'email-address';
            case 'Phone':
                return 'phone-pad';
            case 'MoneyValue':
                return 'numeric';
            default:
                return 'default';
        }
    }

    const formatValue = (text: string): string => {
        switch (contentType) {
            case 'CPF':
                return text.replace(/\D/g, '').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            case 'CNPJ':
                return text.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1/$2').replace(/(\d{4})(\d{1,2})$/, '$1-$2');
            case 'Phone':
                return text.replace(/\D/g, '').replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{4,5})(\d{4})$/, '$1-$2');
            case 'MoneyValue':
                const numericValue = parseInt(text.replace(/[^0-9]/g, ''));
                if (isNaN(numericValue)) {
                    return '';
                }
                const formattedValue = (numericValue / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                return formattedValue;
            case 'CEP':
                return text.replace(/\D/g, '').replace(/(\d{5})(\d{3})$/, '$1-$2');
            default:
                return text;
        }
    }

    const handleTextChange = (text: string) => {
        let formattedText = text;
        if (contentType && ['CPF', 'CNPJ', 'Phone', 'MoneyValue', 'CEP'].includes(contentType)) {
            formattedText = formatValue(text);
        }

        if (textChange) {
            textChange(formattedText);
        }
        
    }

    const labelContent = (
        <>
            {icon &&
                <Icon
                    source={icon}
                    size={20}
                />
            }
            {label}
        </>
    )
    return (
        <>
            <TextInput
                mode='outlined'
                label={labelContent}
                style={DefaultInputStyle.input}
                secureTextEntry={secure}
                onChangeText={handleTextChange}
                onBlur={blurFunction}
                value={value}
                error={!!errorMessage}
                disabled={disabled}
                keyboardType={getKeyboardType()}
            />
            { errorMessage &&
                <Text
                    variant='bodySmall'
                    style={textStyle.error}
                >
                    {errorMessage}
                </Text>
            }
        </>
    );
}