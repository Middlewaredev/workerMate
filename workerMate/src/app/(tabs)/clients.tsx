import ClientCard from "@/components/clientCard";
import DefaultInput from "@/components/defaultInput";
import MainButton, { ButtonType } from "@/components/mainButton";
import colors from "@/constants/colors";
import { layoutStyle } from "@/styles/layout";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { Icon, Text } from "react-native-paper";

export interface Client {
    name: string;
    clientType: string;
    cpf?: string;
    cnpj?: string;
    socialReason?: string;
    email: string;
    phones: string[];
    address: {
        cep: string;
        address: string;
        number: string;
        complement?: string;
        neighborhood: string;
        city: string;
        state: string;
    };
    notes?: string;
}

export default function Clients() {

    const [clients, setClients] = useState<Client[]>([]);
    const [hasClients, setHasClients] = useState(true);

    const loadClients = async () => {
        try{
            const key = "@workermate:clients";
            const clientsData = await AsyncStorage.getItem(key);
            const clientList = clientsData ? JSON.parse(clientsData) : [];
            setHasClients(clients.length > 0);
            setClients(clientList);
            console.log(clients.length)
        } catch (error)  {
            console.error(error)
        }
    }

    useEffect(() => {
        loadClients()
    })


    const noClients = (
        <View style={{flex: 1, alignItems: "center", marginTop: 40}}>
            <Icon
                source="account-outline"
                size={200}
                color={colors.disabled}
            />
            <Text style={{color: colors.disabled}}>
                Nenhum cliente cadastrado
            </Text>
        </View>
    )

    const withClients = (
        <ScrollView style={{flex: 1, width: '100%'}}>
            <View style={{alignItems: "center"}}>
                <DefaultInput
                    label="Buscar cliente"
                    icon="account-search-outline"
                />
                {clients.map((client, index) => 
                    <ClientCard
                        clientName={client.name}
                        type={client.clientType === 'cpf' ? 'Pessoa Física' : "Pessoa Jurídica"}
                        email={client.email}
                        phone={client.phones[0]}
                        key={index}
                    />
                )}
            </View>
        </ScrollView>
    )

    return (
        <View style={layoutStyle.container}>
            {hasClients ? withClients : noClients}
            <MainButton
                title="Adicionar Cliente"
                type={ButtonType.primary}
                link="(stack)/addClient"
            />
        </View>
    );
}