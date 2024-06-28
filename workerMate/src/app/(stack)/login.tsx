import DefaultInput from "@/components/defaultInput";
import Google from "@/components/google";
import MainButton, { ButtonType } from "@/components/mainButton";
import colors from "@/constants/colors";
import { layoutStyle } from "@/styles/layout";
import { textStyle } from "@/styles/text";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, router } from "expo-router";
import { useState } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async() =>{
        const emailKey = "@workermate:userEmail";
        const passwordKey = "@workermate:userPassword";
        try{
            const storedEmail = await AsyncStorage.getItem(emailKey);
            const storedPassword = await AsyncStorage.getItem(passwordKey);
            if(email === storedEmail && password === storedPassword){
                setError('');
                router.replace('home')
            } else {
                setError('E-mail ou senha invalidos');
            }
        } catch (error) {
            console.error(error)
        }
    }

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
                textChange={setEmail}
            />
            <DefaultInput
                label="Senha"
                secure={true}
                textChange={setPassword}
            />
            <Link href="recoverPassword" asChild>
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
            {
                error ? 
                    <Text 
                        variant='bodySmall'
                        style={textStyle.error}
                    >
                        {error}
                    </Text> 
                : 
                    null
            }
            <MainButton
                title="Entrar"
                link=""
                type={ButtonType.secondary}
                pressFunction={handleLogin}
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