import { useState } from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import { Checkbox, Text, useTheme  } from "react-native-paper";
import { layoutStyle } from "@/styles/layout";
import DefaultInput from "@/components/defaultInput";
import MainButton, {ButtonType} from "@/components/mainButton";
import Google from "@/components/google";
import { Link } from "expo-router";
import colors from "@/constants/colors";


export default function Welcome() {

    const [checked, setChecked] = useState(false);
    const theme = useTheme();

    return (
        <SafeAreaView
            style={layoutStyle.containerCentered}
        >
            <Text
                variant='displayMedium'
            >
                Crie sua Conta
            </Text>
            <DefaultInput
                label="Nome"
            />
            <DefaultInput
                label="E-mail"
            />
            <DefaultInput
                label="Senha"
            />
            <DefaultInput
                label="Confirmar senha"
            />
            <View style={
                {
                    flexDirection: 'row',
                    width: '80%',
                    alignItems: 'center'
            }}>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked(!checked);
                    }}
                    uncheckedColor={colors.border}
                    color={colors.primary}
                />
                <Text style={layoutStyle.welcomeFooter}>
                    Estou de acordo com a&nbsp;
                </Text>
                <Link href="privacyPolicy" asChild>
                    <Text>
                        Política de Privacidade
                    </Text>
                </Link>
            </View>
            <MainButton
                title="Cadastrar"
                link="login"
                type={ButtonType.secondary}
                disabled={!checked}
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