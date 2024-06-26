import DefaultInput from "@/components/defaultInput";
import Google from "@/components/google";
import MainButton, { ButtonType } from "@/components/mainButton";
import colors from "@/constants/colors";
import { layoutStyle } from "@/styles/layout";
import { Link } from "expo-router";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";

export default function Login() {
    return (
        <SafeAreaView
            style={layoutStyle.containerCentered}
        >
            <Text
                variant='displayMedium'
            >
                Bem-vindo de volta!
            </Text>
            <DefaultInput
                label="E-mail"
            />
            <DefaultInput
                label="Senha"
            />
            <Link href="" asChild>
                <TouchableOpacity
                    style={{
                        alignItems: 'flex-end',
                        width: '75%'
                    }}
                    activeOpacity={0.6}
                >
                    <Text
                        style={{
                            color: colors.disabled,
                            fontSize: 12,
                        }}
                    >
                        Esqueceu a senha?
                    </Text>
                </TouchableOpacity>
            </Link>
            <MainButton
                title="Entrar"
                link=""
                type={ButtonType.secondary}
            />

            <Link href="createAccount" asChild>
                <TouchableOpacity
                    activeOpacity={0.6}
                >
                    <Text
                        style={layoutStyle.welcomeFooter}
                    >
                        Não tem conta? Cadastrar
                    </Text>
                </TouchableOpacity>
            </Link>
            <Google />
        </SafeAreaView>
    )
}