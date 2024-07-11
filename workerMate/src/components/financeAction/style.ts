import colors from '@/constants/colors';
import { StyleSheet } from 'react-native';

export const FinanceActionStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.border,
        marginRight: 30,
        marginTop: -1,
        paddingHorizontal: 5,
        alignItems: 'center',
        height: 40
    },
    textContainer: {
        flex:1,
        flexDirection: 'row',
    }
});