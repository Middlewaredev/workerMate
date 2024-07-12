import colors from '@/constants/colors';
import { StyleSheet } from 'react-native';

export const footerStyle = StyleSheet.create({
    container: {
        width: '100%',
        borderTopWidth: 1,
        borderColor: colors.border,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
});