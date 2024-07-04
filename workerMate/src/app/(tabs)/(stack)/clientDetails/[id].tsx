import ClientTypeRadio from "@/components/clientTypeRadio";
import DefaultInput from "@/components/defaultInput";
import MainButton, { ButtonType } from "@/components/mainButton";
import TextAreaInput from "@/components/textAreaInput";
import TwoButtons from "@/components/twoButtons";
import colors from "@/constants/colors";
import { useClientContext } from "@/contexts/clientContext";
import { Client } from "@/libs/storage";
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
import { useFocusEffect, useLocalSearchParams, useNavigation } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { Alert, ScrollView, TouchableOpacity, View } from "react-native";
import { Icon, Text } from "react-native-paper";

export default function ClientDetails() {

    const { id, disable } = useLocalSearchParams<{id: string, disable: string}>();
    const [client, setClient] = useState<Client | undefined>(undefined);
    const { isUnique, clients, updateClientFunction } = useClientContext();

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
    const [disabled, setDisabled] = useState(true);
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

    const fillFields = (client: Client) => {
        setClientType(client.clientType ? client.clientType : "");
        setName(client.name ? client.name : "");
        setCpf(client.cpf ? client.cpf : "");
        setCnpj(client.cnpj ? client.cnpj : "");
        setSocialReason(client.socialReason ? client.socialReason : "");
        setEmail(client ? client.email : "");
        setPhone1(client ? client.phones[0] : "");
        setPhone2(client.phones[1] ? client.phones[1] : "");
        setCep(client ? client.address.cep : "");
        setAddress(client ? client.address.address : "");
        setNumber(client ? client.address.number : "");
        setComplement(client.address.complement ? client.address.complement : "");
        setNeighborhood(client ? client.address.neighborhood : "");
        setCity(client ? client.address.city : "");
        setState(client ? client.address.state : "");
        setNotes(client.notes ? client.notes : "");
    }

    useFocusEffect(
        useCallback(() => {
            setDisabled(!(disable === 'true'))
        }, [disable])
    );

    useEffect(() => {
        const foundClient = clients.find(client => client.cpf === id || client.cnpj === id);
        setClient(foundClient);
        if(foundClient){
            fillFields(foundClient)
        }
    }, [id]);
    
    const header = 
    <View style={{
        width: '100%',
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'space-between'
    }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
                source="arrow-left"
                size={24}
            />
        </TouchableOpacity>
        <Text variant='displayMedium'>Detalhes do Cliente</Text>
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => setDisabled(!disabled)}
        >
            <Icon
                source="account-edit-outline"
                size={24}
                color={colors.accent}
            />
        </TouchableOpacity>
    </View>

    

    const handleName = () => {
        const error = validateNome(name);
        setNameError(error);
        return error === '';
    };

    const handleCpf = () => {
        let error = ''
        if(cpf !== client?.cpf){
            const unique = isUnique(cpf, 'cpf');
            if(unique){
                error = 'Já existe um cliente com este CPF'
                setCpfError(error)
                return false
            }
        }
        error = validateCpf(cpf);
        setCpfError(error);
        return error === '';
    };

    const handleCnpj = () => {
        let error = ''
        if(cnpj !== client?.cnpj){
            const unique = isUnique(cnpj, 'cnpj');
            if(unique){
                error = 'Já existe um cliente com este CNPJ'
                setCpfError(error)
                return false
            }
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
        console.log(phone2)
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
        console.log(go)
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
            console.log("aqui")
            if(client){
                console.log("Aqui também")
                updateClientFunction(client, newClient)
                setDisabled(true)
                fillFields(newClient)
            }
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

    const handleCancel = () => {
        if(client){
            fillFields(client)
        }
        setDisabled(true)
    }

    return (
        <View style={layoutStyle.container}>
            {header}
            <ScrollView style={layoutStyle.scroll}>
                <View style={layoutStyle.scrollContent}>
                    <DefaultInput 
                        label="Nome"
                        textChange={setName}
                        value={name}
                        blurFunction={handleName}
                        errorMessage={nameError}
                        disabled={disabled}
                    />
                    <Text style={layoutStyle.topic}>
                        Tipo de cliente
                    </Text>
                    <ClientTypeRadio
                        onValueChange={handleClientTypeChange}
                        disabled={disabled}
                    />
                    {
                        clientType === "cpf" ?
                            <DefaultInput 
                                label="CPF"
                                textChange={setCpf}
                                value={cpf}
                                blurFunction={handleCpf}
                                errorMessage={cpfError}
                                disabled={disabled}
                            />
                        :
                            <>
                                <DefaultInput 
                                    label="CNPJ"
                                    textChange={setCnpj}
                                    value={cnpj}
                                    blurFunction={handleCnpj}
                                    errorMessage={cnpjError}
                                    disabled={disabled}
                                />
                                <DefaultInput 
                                    label="Razão Social"
                                    textChange={setSocialReason}
                                    value={socialReason}
                                    blurFunction={handleSocialReason}
                                    errorMessage={socialReasonError}
                                    disabled={disabled}
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
                        disabled={disabled}
                    />
                    <DefaultInput 
                        label="Telefone com DDD"
                        textChange={setPhone1}
                        value={phone1}
                        blurFunction={handlePhone}
                        errorMessage={phone1Error}
                        disabled={disabled}
                    />
                    <DefaultInput 
                        label="Telefone com DDD"
                        textChange={setPhone2}
                        value={phone2}
                        blurFunction={handlePhone2}
                        errorMessage={phone2Error}
                        disabled={disabled}
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
                        disabled={disabled}
                    />
                    <DefaultInput 
                        label="Logradouro (rua, avedina, etc.)"
                        textChange={setAddress}
                        value={address}
                        blurFunction={handleAddress}
                        errorMessage={addressError}
                        disabled={disabled}
                    />
                    <DefaultInput 
                        label="Número"
                        textChange={setNumber}
                        value={number}
                        blurFunction={handleNumber}
                        errorMessage={numberError}
                        disabled={disabled}
                    />
                    <DefaultInput 
                        label="Complemento (apto, casa, etc.)"
                        textChange={setComplement}
                        value={complement}
                        blurFunction={handleComplement}
                        errorMessage={complementError}
                        disabled={disabled}
                    />
                    <DefaultInput 
                        label="Bairro"
                        textChange={setNeighborhood}
                        value={neighborhood}
                        blurFunction={handleNeighborhood}
                        errorMessage={neighborhoodError}
                        disabled={disabled}
                    />
                    <DefaultInput 
                        label="Cidade"
                        textChange={setCity}
                        value={city}
                        blurFunction={handleCity}
                        errorMessage={cityError}
                        disabled={disabled}
                    />
                    <DefaultInput 
                        label="Estado"
                        textChange={setState}
                        value={state}
                        blurFunction={handleState}
                        errorMessage={stateError}
                        disabled={disabled}
                    />
                    <Text style={layoutStyle.topic}>
                        Detalhes
                    </Text>
                    <TextAreaInput 
                        label="Anotações"
                        textChange={setNotes}
                        value={notes}
                        disabled={disabled}
                    />
                </View>
            </ScrollView>
            <TwoButtons
                mainButtonTitle="Salvar"
                mainLink=""
                mainDisabled={disabled}
                mainPressFunction={handleSaveClient}
                
                secondaryButtonTitle="Cancelar"
                secondaryLink=""
                secondaryDisabled={disabled}
                secondaryPressFunction={handleCancel}
            />
        </View>
    );
}