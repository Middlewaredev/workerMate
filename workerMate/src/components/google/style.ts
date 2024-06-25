import colors from '@/constants/colors';
import { StyleSheet } from 'react-native';

export const DividerStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '70%',
        marginVertical: 20,
    },
    line: {
        borderWidth: 1,
        borderColor: colors.border,
        marginHorizontal: "2%",
        width: '43%'
    },
    google: {
        width: '45%',
        height: 35,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: colors.primary,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    googleText: {
        fontSize: 12,
        marginLeft: 10
    }
});