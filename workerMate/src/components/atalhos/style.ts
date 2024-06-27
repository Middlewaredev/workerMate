import colors from '@/constants/colors';
import { StyleSheet } from 'react-native';

export const AtalhosStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.border,
        marginRight: 30,
        marginLeft: 10,
        marginTop: -1,
        paddingHorizontal: 5,
        alignItems: 'center',
        height: 30
    }
});