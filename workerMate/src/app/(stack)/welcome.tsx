import colors from "@/constants/colors";
import { View } from "react-native";
import { Icon, Text, useTheme  } from "react-native-paper";
import { layoutStyle } from "../styles/layout";
import DefaultInput from "@/components/defaultInput";
import MainButton from "@/components/mainButton";
import Google from "@/components/google";


export default function Welcome() {

    const theme = useTheme();

    return (
        <View
            style={layoutStyle.container}
        >
            <Icon
                source={"hammer-screwdriver"}
                size={150}
                color={colors.accent}
            />
            <Text
                variant='headlineLarge'
                style={layoutStyle.welcomeHeader}
            >
                O parceiro ideal
                da pequena e média
                empresa
            </Text>
            <Text
                variant='headlineMedium'
            >
                Criar Conta
            </Text>
            <DefaultInput
                label="E-mail"
            />
            <MainButton 
                title="Continuar"
            />
            <Text
                style={layoutStyle.welcomeFooter}
            >
                Já tem conta? Entrar
            </Text>
            <Google />
        </View>
    );
}