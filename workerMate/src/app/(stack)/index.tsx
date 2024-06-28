import colors from "@/constants/colors";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { Icon, Text } from "react-native-paper";
import { layoutStyle } from "@/styles/layout";
import DefaultInput from "@/components/defaultInput";
import MainButton, { ButtonType } from "@/components/mainButton";
import Google from "@/components/google";
import { Link, router } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function index() {

    const [email, setEmail] = useState('');

    useEffect(() => {
        const key = '@workermate:userEmail';
        async function defineAppFlow() {
            try{
                const data = await AsyncStorage.getItem(key);
                if (data) {
                    router.replace("login")
                }
            } catch (error){
                console.error(error)
            }
        }
        defineAppFlow();
    }, [])

    const handleContinue = async () => {
        console.log(email)
        try {
            await AsyncStorage.setItem('@workermate:userEmail', email);
        } catch (error) {
            console.error(error);
        }
    }

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
                textChange={setEmail}
            />
            <MainButton 
                title="Continuar"
                link="createAccount"
                type={ButtonType.primary}
                disabled={false}
                pressFunction={handleContinue}
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