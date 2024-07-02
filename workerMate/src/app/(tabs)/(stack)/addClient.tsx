import ClientTypeRadio from "@/components/clientTypeRadio";
import DefaultInput from "@/components/defaultInput";
import Header from "@/components/header";
import MainButton, { ButtonType } from "@/components/mainButton";
import TextAreaInput from "@/components/textAreaInput";
import { layoutStyle } from "@/styles/layout";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { Text } from "react-native-paper";

export default function AddClient() {

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
    

    const handleClientTypeChange = (value: string) => {
        setClientType(value);
    };

    const handleSaveClient = async () => {
        const newClient = {
            name,
            clientType,
            cpf: clientType === 'cpf' ? cpf : null,
            cnpj: clientType === 'cnpj' ? cnpj : null,
            socialReason: clientType === 'cnpj' ? socialReason : null,
            email,
            phones: [phone1, phone2],
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

        try {
            const clientsData = await AsyncStorage.getItem('@workermate:clients');
            const clients = clientsData ? JSON.parse(clientsData) : [];
            clients.push(newClient);
            await AsyncStorage.setItem('@workermate:clients', JSON.stringify(clients));
        } catch (error) {
            console.error(error);
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
                            />
                        :
                            <>
                                <DefaultInput 
                                    label="CNPJ"
                                    textChange={setCnpj}
                                />
                                <DefaultInput 
                                    label="Razão Social"
                                    textChange={setSocialReason}
                                />
                            </>
                    }
                    <Text style={layoutStyle.topic}>
                        Contatos
                    </Text>
                    <DefaultInput 
                        label="E-mail"
                        textChange={setEmail}
                    />
                    <DefaultInput 
                        label="Telefone com DDD"
                        textChange={setPhone1}
                    />
                    <DefaultInput 
                        label="Telefone com DDD"
                        textChange={setPhone2}
                    />
                    <Text style={layoutStyle.topic}>
                        Endereço
                    </Text>
                    <DefaultInput 
                        label="CEP"
                        textChange={setCep}
                    />
                    <DefaultInput 
                        label="Logradouro (rua, avedina, etc.)"
                        textChange={setAddress}
                    />
                    <DefaultInput 
                        label="Número"
                        textChange={setNumber}
                    />
                    <DefaultInput 
                        label="Complemento (apto, casa, etc.)"
                        textChange={setComplement}
                    />
                    <DefaultInput 
                        label="Bairro"
                        textChange={setNeighborhood}
                    />
                    <DefaultInput 
                        label="Cidade"
                        textChange={setCity}
                    />
                    <DefaultInput 
                        label="Estado"
                        textChange={setState}
                    />
                    <Text style={layoutStyle.topic}>
                        Detalhes
                    </Text>
                    <TextAreaInput 
                        label="Anotações"
                        textChange={setNotes}
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