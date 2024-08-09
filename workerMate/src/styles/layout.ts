import colors from "@/constants/colors";
import { StyleSheet } from "react-native";

export const layoutStyle = StyleSheet.create({
    containerCentered: {
        backgroundColor: "#f5f5f5",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        backgroundColor: "#f5f5f5",
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10
    },
    containerJustified: {
        backgroundColor: colors.background,
        flex: 1,
        paddingLeft: 20
    },
    welcomeHeader: {
        width: '40%',
        //backgroundColor: "#ff0000",
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 60
    },
    welcomeFooter: {
        color: colors.disabled,
        fontSize: 12
    },
    topic:{
        width: '80%',
        marginTop: 5,
        fontSize: 16
    },
    scroll: {
        width: '100%'
    },
    scrollContent: {
        width: '100%',
        alignItems: 'center'
    },
    dropdownView: {
        width: '80%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.border,
        height: 30,
        justifyContent: 'center',
        marginBottom: 5
    },
    dropdown: {
        width: '100%',
        height: 50
    }
})