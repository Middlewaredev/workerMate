import DefaultInput from "@/components/defaultInput";
import Header from "@/components/header";
import colors from "@/constants/colors";
import { layoutStyle } from "@/styles/layout";
import { Alert, SafeAreaView, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";

export default function RecoverPassword() {
    return (
        <SafeAreaView style={layoutStyle.container}>
            <Header
                title="Recuperar Senha"
            />
            <Text
                variant='displaySmall'
            >
                Esqueceu sua Senha?
            </Text>
            <Text 
                variant='bodySmall'
                style={{
                    //backgroundColor: "#ff0000",
                    width: '50%',
                    color: colors.disabled,
                    marginVertical: 10
                }}
            >
                Insira seu email abaixo e enviaremos um link para redefinir sua senha
            </Text>
            <DefaultInput
                label="E-mail"
            />
            <TouchableOpacity
                activeOpacity={0.6}
                style={{
                    height: 35,
                    width: "60%",
                    backgroundColor: colors.primary,
                    marginVertical: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 8,
                    elevation: 3
                }}
                onPress={() => Alert.alert(
                    'Email enviado com sucesso!',
                    'Verifique sua caixa de entrada para redefinir sua senha', 
                    [{
                        text: "OK"
                    }]
                )}
            >
                <Text
                    style={{
                        color: colors.surface,
                        fontSize: 18,
                        fontWeight: 'bold'
                    }}
                >
                    Enviar
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}