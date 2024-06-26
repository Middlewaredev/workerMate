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
        marginTop: 40
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
    }
})