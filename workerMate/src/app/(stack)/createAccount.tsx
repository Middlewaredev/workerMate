import { useEffect, useState } from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import { Checkbox, Text  } from "react-native-paper";
import { layoutStyle } from "@/styles/layout";
import DefaultInput from "@/components/defaultInput";
import MainButton, {ButtonType} from "@/components/mainButton";
import Google from "@/components/google";
import { Link, useNavigation } from "expo-router";
import colors from "@/constants/colors";
import { textStyle } from "@/styles/text";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Welcome() {

    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [checked, setChecked] = useState(false);
    const navigation = useNavigation();

    const validateNome = (nome: string) => {
        // Expressão regular para validar nome e sobrenome
        const re = /^[A-Za-z]+(?:\s[A-Za-z]+)+$/;
        return re.test(nome);
    };

    useEffect(() => {
        const key = '@workermate:userEmail';
        async function loadEmail() {
            try{
                const data = await AsyncStorage.getItem(key);
                if(data){
                    setEmail(data)
                }
            } catch (error){
                console.error(error)
            }
        }
        loadEmail();
    }, [])

    const validateEmail = (email: string) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };
    
    const validatePassword = (password: string) => {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return re.test(password);
    };

    const handleSignUp = async () => {
        if (!validateNome(nome)) {
            setError('Nome inválido, precisa de nome e sobrenome');
            return;
        }

        if (!validateEmail(email)) {
            setError('E-mail inválido');
            return;
        }

        if (!validatePassword(password)) {
            setError('A senha precisa ter pelo menos 8 caracteres,\nincluindo letras maiúsculas e minusculas,\nnumeros e caracteres especiais');
            return;
        }

        if (password !== confirmPassword) {
            setError('A senha não confere');
            return;
        }

        try {
            await AsyncStorage.setItem('@workermate:userEmail', email);
            await AsyncStorage.setItem('@workermate:userPassword', password);
            await AsyncStorage.setItem('@workermate:userNome', nome);
            // Navigate to login screen
            navigation.navigate('login');
        } catch (error) {
            setError('Failed to save user data');
        }
    }

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
                textChange={setNome}
            />
            <DefaultInput
                label="E-mail"
                textChange={setEmail}
                value={email}
            />
            <DefaultInput
                label="Senha"
                secure={true}
                textChange={setPassword}
            />
            <DefaultInput
                label="Confirmar senha"
                secure={true}
                textChange={setConfirmPassword}
            />
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
                link=""
                type={ButtonType.secondary}
                disabled={!checked}
                pressFunction={handleSignUp}
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