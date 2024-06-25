import colors from '@/constants/colors';
import { StyleSheet } from 'react-native';

export const MainButtonStyle = StyleSheet.create({
    button:{
        height: 35,
        width: "60%",
        backgroundColor: colors.accent,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        elevation: 3 
    },
    content: {
        color: colors.surface,
        fontSize: 18,
        fontWeight: 'bold'
    }
});