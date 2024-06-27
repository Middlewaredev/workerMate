import colors from '@/constants/colors';
import { StyleSheet } from 'react-native';

export const PageHeaderStyle = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingBottom: 20,
        backgroundColor: colors.primary,
        width: '100%',
        height: 95,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',

    },
    content: {
        color: colors.surface,
        textAlign: 'center',
        flex: 1,
        marginLeft: -34
    }
});