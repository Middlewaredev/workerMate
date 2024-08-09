import colors from '@/constants/colors';
import { StyleSheet } from 'react-native';

export const receivableOptionsStyle = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        width: '100%', 
        paddingHorizontal: '12%', 
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    title: {
        fontSize: 12
    },
    titleDisabled: {
        fontSize: 12,
        color: colors.disabled
    },
    subtitle: {
        fontSize: 10,
        color: colors.disabled,
        marginLeft: 5
    }
});