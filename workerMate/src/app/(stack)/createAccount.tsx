import { useEffect, useState } from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import { Checkbox, Text } from "react-native-paper";
import { layoutStyle } from "@/styles/layout";
import DefaultInput from "@/components/defaultInput";
import MainButton, { ButtonType } from "@/components/mainButton";
import Google from "@/components/google";
import { Link, useNavigation } from "expo-router";
import colors from "@/constants/colors";
import { textStyle } from "@/styles/text";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { validateNome, validateEmail, validatePassword } from "@/utils/validation";

export default function CreateAccount() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [checked, setChecked] = useState(false);
    const navigation = useNavigation();

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    useEffect(() => {
        const key = '@workermate:userEmail';
        async function loadEmail() {
            try {
                const data = await AsyncStorage.getItem(key);
                if (data) {
                    setEmail(data);
                }
            } catch (error) {
                console.error(error);
            }
        }
        loadEmail();
    }, []);

    const validateAllFields = () => {
        let valid = true;

        // Validate Name
        valid = handleName() && valid;

        // Validate Email
        valid = handleEmail() && valid;

        // Validate Password
        valid = handlePassword() && valid;

        return valid;
    };

    const handleName = () => {
        const error = validateNome(name);
        setNameError(error);
        return error === '';
    };

    const handleEmail = () => {
        const error = validateEmail(email);
        setEmailError(error);
        return error === '';
    };

    const handlePassword = () => {
        const error = validatePassword(password);
        setPasswordError(error);
        return error === '';
    };

    const handleSignUp = async () => {
        const isValid = validateAllFields();

        if (!isValid) {
            return;
        }

        if (password !== confirmPassword) {
            setError('A senha não confere');
            return;
        }

        try {
            await AsyncStorage.setItem('@workermate:userEmail', email);
            await AsyncStorage.setItem('@workermate:userPassword', password);
            await AsyncStorage.setItem('@workermate:userName', name);
            navigation.navigate('login');
        } catch (error) {
            console.error('Failed to save user data');
        }
    };

    return (
        <SafeAreaView style={layoutStyle.containerCentered}>
            <Text variant='displayMedium'>Create Your Account</Text>
            <DefaultInput
                label="Nome"
                textChange={setName}
                errorMessage={nameError}
                contentType="PlainText"
            />
            <DefaultInput
                label="Email"
                textChange={setEmail}
                value={email}
                errorMessage={emailError}
                contentType="Email"
            />
            <DefaultInput
                label="Senha"
                secure={true}
                textChange={setPassword}
                errorMessage={passwordError}
                contentType="PlainText"
            />
            <DefaultInput
                label="Confirmar senha"
                secure={true}
                textChange={setConfirmPassword}
                contentType="PlainText"
            />
            {error ? (
                <Text variant='bodySmall' style={textStyle.error}>
                    {error}
                </Text>
            ) : null}
            <View style={{ flexDirection: 'row', width: '80%', alignItems: 'center' }}>
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
                <TouchableOpacity activeOpacity={0.6}>
                    <Text style={layoutStyle.welcomeFooter}>
                        Já tem conta? Entrar
                    </Text>
                </TouchableOpacity>
            </Link>
            <Google />
        </SafeAreaView>
    );
}
