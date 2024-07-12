import { View } from "react-native";
import MainButton, { ButtonType } from "../mainButton";
import { footerStyle } from "./style";
import { Text } from "react-native-paper";

export interface FooterProps{
    value: string,
    link: string
}

export default function Footer({value, link}: FooterProps) {
    return (
        <View style={footerStyle.container}>
            <Text>Total: R$ {value}</Text>
            <MainButton
                link={link}
                title="Incluir Recebimento"
                type={ButtonType.primary}

            />
        </View>
    );
}