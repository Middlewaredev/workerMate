import colors from '@/constants/colors';
import { StyleSheet } from 'react-native';

export const receivableCardStyle = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    contentText:{
        fontSize: 12
    },
    titleValue: {
        fontSize: 14,
        color: colors.accent
    },
    contentContainer: {
        marginVertical: 5,
        backgroundColor: colors.surface,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 8,
        elevation: 5,
        borderColor: colors.border,
        borderWidth: 1,
        width: '80%'
        
    },
    iconsContainer: {
        flexDirection: 'row',
        position: 'absolute',
        top: 5,
        right: 10,
        zIndex: 1
    },
    contentDefinition: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    itemContainer: {
        flexDirection: 'row'
    }
});