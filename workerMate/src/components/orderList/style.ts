import colors from '@/constants/colors';
import { StyleSheet } from 'react-native';

export const OrderListStyle = StyleSheet.create({
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
    },
    textContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});