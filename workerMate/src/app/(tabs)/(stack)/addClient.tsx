import ClientTypeRadio from "@/components/clientTypeRadio";
import DefaultInput from "@/components/defaultInput";
import Header from "@/components/header";
import MainButton, { ButtonType } from "@/components/mainButton";
import TextAreaInput from "@/components/textAreaInput";
import { useClientContext } from "@/contexts/clientContext";
import { layoutStyle } from "@/styles/layout";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { Text } from "react-native-paper";

export default function AddClient() {

    const {addClient} = useClientContext();
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

    const handleSaveClient = () => {
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
                            />
                        :
                            <>
                                <DefaultInput 
                                    label="CNPJ"
                                    textChange={setCnpj}
                                    value={cnpj}
                                />
                                <DefaultInput 
                                    label="Razão Social"
                                    textChange={setSocialReason}
                                    value={socialReason}
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
                    />
                    <DefaultInput 
                        label="Telefone com DDD"
                        textChange={setPhone1}
                        value={phone1}
                    />
                    <DefaultInput 
                        label="Telefone com DDD"
                        textChange={setPhone2}
                        value={phone2}
                    />
                    <Text style={layoutStyle.topic}>
                        Endereço
                    </Text>
                    <DefaultInput 
                        label="CEP"
                        textChange={setCep}
                        value={cep}
                    />
                    <DefaultInput 
                        label="Logradouro (rua, avedina, etc.)"
                        textChange={setAddress}
                        value={address}
                    />
                    <DefaultInput 
                        label="Número"
                        textChange={setNumber}
                        value={number}
                    />
                    <DefaultInput 
                        label="Complemento (apto, casa, etc.)"
                        textChange={setComplement}
                        value={complement}
                    />
                    <DefaultInput 
                        label="Bairro"
                        textChange={setNeighborhood}
                        value={neighborhood}
                    />
                    <DefaultInput 
                        label="Cidade"
                        textChange={setCity}
                        value={city}
                    />
                    <DefaultInput 
                        label="Estado"
                        textChange={setState}
                        value={state}
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
                link="clients"
                pressFunction={handleSaveClient}
            />
        </View>
    );
}