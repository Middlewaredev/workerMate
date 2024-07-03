import ClientTypeRadio from "@/components/clientTypeRadio";
import DefaultInput from "@/components/defaultInput";
import Header from "@/components/header";
import MainButton, { ButtonType } from "@/components/mainButton";
import TextAreaInput from "@/components/textAreaInput";
import { useClientContext } from "@/contexts/clientContext";
import { layoutStyle } from "@/styles/layout";
import { 
    validateAddress,
    validateCep,
    validateCity,
    validateCnpj,
    validateComplement,
    validateCpf,
    validateEmail,
    validateNeighborhood,
    validateNome,
    validateNumber,
    validatePhone,
    validatePhoneEmpty,
    validateSocialReason,
    validateState
} from "@/utils/validation";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import { Text } from "react-native-paper";

export default function AddClient() {

    const {addClient, isUnique} = useClientContext();
    const [clientType, setClientType] = useState('cpf');
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [socialReason, setSocialReason] = useState('');
    const [email, setEmail] = useState('');
    const [phone1, setPhone1] = useState('');
    const [phone2, setPhone2] = useState('');
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [complement, setComplement] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [notes, setNotes] = useState('');
    const navigation = useNavigation();

    const [nameError, setNameError] = useState('');
    const [cpfError, setCpfError] = useState('');
    const [cnpjError, setCnpjError] = useState('');
    const [socialReasonError, setSocialReasonError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phone1Error, setPhone1Error] = useState('');
    const [phone2Error, setPhone2Error] = useState('');
    const [cepError, setCepError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [numberError, setNumberError] = useState('');
    const [complementError, setComplementError] = useState('');
    const [neighborhoodError, setNeighborhoodError] = useState('');
    const [cityError, setCityError] = useState('');
    const [stateError, setStateError] = useState('');
    
    const handleName = () => {
        const error = validateNome(name);
        setNameError(error);
        return error === '';
    };

    const handleCpf = () => {
        const unique = isUnique(cpf, 'cpf');
        let error = ''
        if(unique){
            error = 'Já existe um cliente com este CPF'
            setCpfError(error)
            return false
        }
        error = validateCpf(cpf);
        setCpfError(error);
        return error === '';
    };

    const handleCnpj = () => {
        const unique = isUnique(cnpj, 'cnpj');
        let error = ''
        if(unique){
            error = 'Já existe um cliente com este CPF'
            setCnpjError(error)
            return false
        }
        error = validateCnpj(cnpj);
        setCnpjError(error);
        return error === '';
    };

    const handleSocialReason = () => {
        const error = validateSocialReason(socialReason);
        setSocialReasonError(error);
        return error === '';
    }

    const handleEmail = () => {
        const error = validateEmail(email);
        setEmailError(error);
        return error === '';
    }

    const handlePhone = () => {
        const error = validatePhone(phone1);
        setPhone1Error(error);
        return error === '';
    }

    const handlePhone2 = () => {
        const error = validatePhoneEmpty(phone2);
        setPhone2Error(error);
        return error === '';
    }

    const handleCep = () => {
        const error = validateCep(cep);
        setCepError(error);
        return error === '';
    }

    const handleAddress = () => {
        const error = validateAddress(address);
        setAddressError(error);
        return error === '';
    }

    const handleNumber = () => {
        const error = validateNumber(number);
        setNumberError(error);
        return error === '';
    }

    const handleComplement = () => {
        const error = validateComplement(complement);
        setComplementError(error);
        return error === '';
    }

    const handleNeighborhood = () => {
        const error = validateNeighborhood(neighborhood);
        setNeighborhoodError(error);
        return error === '';
    }

    const handleCity = () => {
        const error = validateCity(city);
        setCityError(error);
        return error === '';
    }

    const handleState = () => {
        const error = validateState(state);
        setStateError(error);
        return error === '';
    }

    const clearFields = () => {
        setName("");
        setCpf("");
        setCnpj("");
        setSocialReason("");
        setEmail("");
        setPhone1("");
        setPhone2("");
        setCep("");
        setAddress("");
        setNumber("");
        setComplement("");
        setNeighborhood("");
        setCity("");
        setState("");
        setNotes("");
    };

    const handleClientTypeChange = (value: string) => {
        setClientType(value);
    };

    const validateAllFields = () => {
        let valid = true;
        valid = handleName() && valid;
        if (clientType === 'cpf') {
            valid = handleCpf() && valid;
        } else {
            valid = handleCnpj() && valid;
            valid = handleSocialReason() && valid;
        }
        valid = handleEmail() && valid;
        valid = handlePhone() && valid;
        valid = handlePhone2() && valid;
        valid = handleCep() && valid;
        valid = handleAddress() && valid;
        valid = handleNumber() && valid;
        valid = handleComplement() && valid;
        valid = handleNeighborhood() && valid;
        valid = handleCity() && valid;
        valid = handleState() && valid;
        return valid;
    }

    const handleSaveClient = () => {
        let go = validateAllFields();
        
        if(go){
            const newClient = {
                name,
                clientType,
                cpf: clientType === "cpf" ? cpf : undefined,
                cnpj: clientType === "cnpj" ? cnpj : undefined,
                socialReason: clientType === "cnpj" ? socialReason : undefined,
                email,
                phones: [phone1, phone2].filter(Boolean), 
                address: {
                    cep,
                    address,
                    number,
                    complement,
                    neighborhood,
                    city,
                    state,
                },
                notes,
            };

            addClient(newClient);
            clearFields();
            navigation.navigate("clients")
        } else {
            Alert.alert(
                'Erro ao salvar o Cliente',
                'Alguns campos obrigatórios estão incorretos, revise antes de salvar o cliente',
                [
                    {
                        text: 'Ok',
                    },
                ],
            );
        }
    };

    return (
        <View style={layoutStyle.container}>
            <Header
                title="Adicionar Cliente"
            />
            <ScrollView style={layoutStyle.scroll}>
                <View style={layoutStyle.scrollContent}>
                    <DefaultInput 
                        label="Nome"
                        textChange={setName}
                        value={name}
                        blurFunction={handleName}
                        errorMessage={nameError}
                    />
                    <Text style={layoutStyle.topic}>
                        Tipo de cliente
                    </Text>
                    <ClientTypeRadio
                        onValueChange={handleClientTypeChange}
                    />
                    {
                        clientType === "cpf" ?
                            <DefaultInput 
                                label="CPF"
                                textChange={setCpf}
                                value={cpf}
                                blurFunction={handleCpf}
                                errorMessage={cpfError}
                            />
                        :
                            <>
                                <DefaultInput 
                                    label="CNPJ"
                                    textChange={setCnpj}
                                    value={cnpj}
                                    blurFunction={handleCnpj}
                                    errorMessage={cnpjError}
                                />
                                <DefaultInput 
                                    label="Razão Social"
                                    textChange={setSocialReason}
                                    value={socialReason}
                                    blurFunction={handleSocialReason}
                                    errorMessage={socialReasonError}
                                />
                            </>
                    }
                    <Text style={layoutStyle.topic}>
                        Contatos
                    </Text>
                    <DefaultInput 
                        label="E-mail"
                        textChange={setEmail}
                        value={email}
                        blurFunction={handleEmail}
                        errorMessage={emailError}
                    />
                    <DefaultInput 
                        label="Telefone com DDD"
                        textChange={setPhone1}
                        value={phone1}
                        blurFunction={handlePhone}
                        errorMessage={phone1Error}
                    />
                    <DefaultInput 
                        label="Telefone com DDD"
                        textChange={setPhone2}
                        value={phone2}
                        blurFunction={handlePhone2}
                        errorMessage={phone2Error}
                    />
                    <Text style={layoutStyle.topic}>
                        Endereço
                    </Text>
                    <DefaultInput 
                        label="CEP"
                        textChange={setCep}
                        value={cep}
                        blurFunction={handleCep}
                        errorMessage={cepError}
                    />
                    <DefaultInput 
                        label="Logradouro (rua, avedina, etc.)"
                        textChange={setAddress}
                        value={address}
                        blurFunction={handleAddress}
                        errorMessage={addressError}
                    />
                    <DefaultInput 
                        label="Número"
                        textChange={setNumber}
                        value={number}
                        blurFunction={handleNumber}
                        errorMessage={numberError}
                    />
                    <DefaultInput 
                        label="Complemento (apto, casa, etc.)"
                        textChange={setComplement}
                        value={complement}
                        blurFunction={handleComplement}
                        errorMessage={complementError}
                    />
                    <DefaultInput 
                        label="Bairro"
                        textChange={setNeighborhood}
                        value={neighborhood}
                        blurFunction={handleNeighborhood}
                        errorMessage={neighborhoodError}
                    />
                    <DefaultInput 
                        label="Cidade"
                        textChange={setCity}
                        value={city}
                        blurFunction={handleCity}
                        errorMessage={cityError}
                    />
                    <DefaultInput 
                        label="Estado"
                        textChange={setState}
                        value={state}
                        blurFunction={handleState}
                        errorMessage={stateError}
                    />
                    <Text style={layoutStyle.topic}>
                        Detalhes
                    </Text>
                    <TextAreaInput 
                        label="Anotações"
                        textChange={setNotes}
                        value={notes}
                    />
                </View>
            </ScrollView>
            <MainButton
                title="Salvar Cliente"
                type={ButtonType.primary}
                link=""
                pressFunction={handleSaveClient}
            />
        </View>
    );
}