import colors from '@/constants/colors';
import { StyleSheet } from 'react-native';

export const twoButtonsStyle = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        height: 60,
        paddingHorizontal: 20

    },
    disabledButton:{
        height: 35,
        width: "45%",
        backgroundColor: colors.border,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        elevation: 3
    },
    secondaryButton: {
        height: 35,
        width: "45%",
        backgroundColor: colors.background,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        elevation: 3,
        borderWidth: 1,
        borderColor: colors.primary
    },
    secondaryText: {
        
    },
    mainButton: {
        height: 35,
        width: "45%",
        backgroundColor: colors.primary,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        elevation: 3
    },
    mainText: {
        color: colors.surface,
    }
});