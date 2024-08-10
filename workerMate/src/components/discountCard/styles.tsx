import colors from '@/constants/colors';
import { StyleSheet } from 'react-native';

export const DiscountCarcdStyle = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 5,
        borderRadius: 5,
        elevation: 2,
        marginVertical: 5,
        backgroundColor: colors.background,
        borderWidth: 1,
        borderColor: colors.border,
        width: '80%'
    },
    title: {
        fontSize: 16,
        marginBottom: 8,
    },
    radioGroup: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16,
    },
    radioButtonLabel: {
        marginLeft: 8,
    },
    input: {
        borderColor: colors.border,
        borderRadius: 5,
        height: 30
    },
});