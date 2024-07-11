import colors from '@/constants/colors';
import { fonts } from '@/constants/fonts';
import { StyleSheet } from 'react-native';

export const financialDetailsStyle = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: colors.surface,
        borderColor: colors.border,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 145,
        paddingHorizontal: 25,
        marginBottom: 15,
        paddingTop: 5
    },
    subTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    lineContainer: {
        marginTop: 10,
        marginLeft: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title:{
        fontSize: 14,
        fontWeight: 'bold'
    },
    lineTexts: {
        fontSize: 12
    }
});