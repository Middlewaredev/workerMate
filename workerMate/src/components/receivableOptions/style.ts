import colors from '@/constants/colors';
import { StyleSheet } from 'react-native';

export const receivableOptionsStyle = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        width: '100%', 
        paddingHorizontal: 20, 
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5
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