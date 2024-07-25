import { Alert, TouchableOpacity, View } from "react-native";
import { Checkbox, Icon, Text } from "react-native-paper";
import { ClientCardStyle } from "./style";
import { useClientContext } from "@/contexts/clientContext";
import { Link, router } from "expo-router";
import { Client } from "@/libs/clientStorage";

export interface ClientCardProps {
    client: Client;
    selectable: boolean;
    returnTo?: string;
    onChangeFunction?: (id: string) => void;
    selectedClientId?: string;
}

export default function ClientCard({client, selectable, returnTo, onChangeFunction, selectedClientId}: ClientCardProps) {
    const {removeClients} = useClientContext();
    const link =  `clientDetails/${client.clientType === "cpf" ? client.cpf : client.cnpj}`;
    const isSelected = client.clientType === "cpf" ? client.cpf === selectedClientId : client.cnpj === selectedClientId;

    const confirmDeleteClient = () => {
        Alert.alert(
            'Excluir Cliente',
            'Tem certeza de que deseja excluir este cliente?',
            [
                {
                    text: 'Cancelar',
                },
                {
                    text: 'Excluir',
                    onPress: () => removeClients(client),
                },
            ],
            { cancelable: true }
        );
    };

    const editDeletIcons = (
        <View style={ClientCardStyle.icons}>
            <Link href={{ pathname: link, params: { disable: 'false' } }} asChild>
                <TouchableOpacity
                    activeOpacity={0.6}
                >
                    <Icon
                        source="account-edit-outline"
                        size={24}
                    />
                </TouchableOpacity>
            </Link>
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={confirmDeleteClient}
            >
                <Icon
                    source="delete-outline"
                    size={24}
                />
            </TouchableOpacity>
        </View>
    )

    const handleSelect = () => {
        const clientId = client.clientType === "cpf" ? client.cpf : client.cnpj
        if (onChangeFunction) {
            onChangeFunction(isSelected ? '' : clientId);
            if (!isSelected){
                router.replace(`${returnTo}/?clientId=${clientId}`);
            }
        }
    };

    const selectIcon =(
        <Checkbox
            status={isSelected ? 'checked': 'unchecked'}
            onPress={handleSelect}
        />
    )
    return (
        <View style={ClientCardStyle.container}>
            <View style={ClientCardStyle.content}>
                <Text>
                    {client.name}
                </Text>
                {
                    selectable
                    ?   selectIcon
                    :   editDeletIcons   
                }
            </View>
            <View style={ClientCardStyle.content}>
                <View style={ClientCardStyle.dualContent} >
                    <Text>Tipo:&nbsp;</Text>
                    <Text>{client.clientType === 'cpf' ? 'Pessoa Física' : "Pessoa Jurídica"}</Text>
                </View>
            </View>
            <View style={ClientCardStyle.content}>
                <View style={ClientCardStyle.dualContent}>
                    <Icon
                        source="email-outline"
                        size={16}
                    />                
                    <Text>
                        &nbsp;{client.email}
                    </Text>
                </View>
                <View style={ClientCardStyle.dualContent}>
                    <Icon
                        source="cellphone"
                        size={16}
                    />
                    <Text>
                        &nbsp;{client.phones[0]}
                    </Text>
                </View>
            </View>
            <Link href={{ pathname: link, params: { disable: 'true' } }} asChild>
                <TouchableOpacity
                    activeOpacity={0.6}
                >
                    <Text 
                        style={ClientCardStyle.link}
                    >
                        Ver mais
                    </Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
}