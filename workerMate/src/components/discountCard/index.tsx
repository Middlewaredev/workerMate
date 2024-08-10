import React, { useState } from 'react';
import { View } from 'react-native';
import { RadioButton, Text, TextInput } from 'react-native-paper';
import { DiscountCarcdStyle } from './styles';

export default function DiscountCard() {
    const [discountType, setDiscountType] = useState<'percentage' | 'value'>('percentage');
    const [discountValue, setDiscountValue] = useState<string>('');

    const formatValue = (text: string): string => {
        const numericValue = parseInt(text.replace(/[^0-9]/g, ''));
        if (isNaN(numericValue)) {
            return '';
        }
        return (numericValue / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    const formatPercentage = (text: string): string => {
        const numericValue = parseInt(text.replace(/[^0-9]/g, ''));
        if (isNaN(numericValue)) {
            return '';
        }
        return `${numericValue}%`;
    };

    const handleDiscountChange = (value: string) => {
        const formattedValue =
            discountType === 'percentage' ? formatPercentage(value) : formatValue(value);
        setDiscountValue(formattedValue);
    };

    const handleTypeChange = (type: 'percentage' | 'value') => {
        // Formatar valor atual para o novo tipo
        const formattedValue =
            type === 'percentage'
                ? formatPercentage(discountValue.replace(/[^0-9]/g, ''))
                : formatValue(discountValue.replace(/[^0-9]/g, ''));
        setDiscountType(type);
        setDiscountValue(formattedValue);
    };

    return (
        <View style={DiscountCarcdStyle.container}>
            <Text style={DiscountCarcdStyle.title}>Tipo de desconto</Text>
            <View style={DiscountCarcdStyle.radioGroup}>
                <View style={DiscountCarcdStyle.radioButtonContainer}>
                    <RadioButton
                        value="percentage"
                        status={discountType === 'percentage' ? 'checked' : 'unchecked'}
                        onPress={() => handleTypeChange('percentage')}
                    />
                    <Text style={DiscountCarcdStyle.radioButtonLabel}>Porcentagem (%)</Text>
                </View>
                <View style={DiscountCarcdStyle.radioButtonContainer}>
                    <RadioButton
                        value="value"
                        status={discountType === 'value' ? 'checked' : 'unchecked'}
                        onPress={() => handleTypeChange('value')}
                    />
                    <Text style={DiscountCarcdStyle.radioButtonLabel}>Valor (R$)</Text>
                </View>
            </View>
            <TextInput
                label={discountType === 'percentage' ? 'Desconto (%)' : 'Desconto (R$)'}
                value={discountValue}
                onChangeText={handleDiscountChange}
                keyboardType="numeric"
                style={DiscountCarcdStyle.input}
                mode="outlined"
            />
        </View>
    );
}
