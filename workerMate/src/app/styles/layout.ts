import colors from "@/constants/colors";
import { StyleSheet } from "react-native";

export const layoutStyle = StyleSheet.create({
    container: {
        backgroundColor: "#f5f5f5",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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