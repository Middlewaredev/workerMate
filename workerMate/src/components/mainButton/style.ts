import colors from '@/constants/colors';
import { StyleSheet } from 'react-native';

export const MainButtonStyle = StyleSheet.create({
    primary:{
        height: 35,
        width: "60%",
        backgroundColor: colors.accent,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        elevation: 3 
    },
    secondary:{
        height: 35,
        width: "60%",
        backgroundColor: colors.primary,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        elevation: 3 
    },
    disabled:{
        height: 35,
        width: "60%",
        backgroundColor: colors.border,
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