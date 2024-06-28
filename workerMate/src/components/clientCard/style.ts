import colors from '@/constants/colors';
import { StyleSheet } from 'react-native';

export const ClientCardStyle = StyleSheet.create({
    container: {
        height: 120,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 8,
        elevation: 5,
        backgroundColor: colors.surface,
        width: '80%',
        alignItems: 'center',
        padding: 10,
        marginTop: 10
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        //backgroundColor: '#00ff00',
        width: '100%',
        alignItems: 'flex-start'
    },
    dualContent: {
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center'
    },
    icons: {
        flexDirection: 'row',
        //backgroundColor: '#0000ff'
    },
    link: {
        fontSize: 14,
        color: colors.accent
    }
});