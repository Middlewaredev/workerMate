import colors from '@/constants/colors';
import { StyleSheet } from 'react-native';

export const AgendaCardStyle = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 20,
        marginRight: 20,
        width: 150,
        height: 100,
        backgroundColor: colors.background,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    agenda: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop:10
    },
    item: {
        marginLeft: 10,
        alignItems: 'center'
    }
});