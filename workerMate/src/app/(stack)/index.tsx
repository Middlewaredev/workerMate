import colors from "@/constants/colors";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { Icon, Text, useTheme  } from "react-native-paper";
import { layoutStyle } from "@/styles/layout";
import DefaultInput from "@/components/defaultInput";
import MainButton, { ButtonType } from "@/components/mainButton";
import Google from "@/components/google";
import { Link } from "expo-router";


export default function index() {

    const theme = useTheme();

    return (
        <SafeAreaView
            style={layoutStyle.containerCentered}
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
                link="createAccount"
                type={ButtonType.primary}
                disabled={false}
            />
            <Link href="login" asChild>
                <TouchableOpacity
                    activeOpacity={0.6}
                >
                    <Text
                        style={layoutStyle.welcomeFooter}
                    >
                        Já tem conta? Entrar
                    </Text>
                </TouchableOpacity>
            </Link>
            <Google />
        </SafeAreaView>
    );
}