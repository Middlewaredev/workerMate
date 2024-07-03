import { Alert, TouchableOpacity, View } from "react-native";
import { Icon, Text } from "react-native-paper";
import { ClientCardStyle } from "./style";
import { Client } from "@/libs/storage";
import { useClientContext } from "@/contexts/clientContext";

export interface ClientCardProps {
    client: Client;
}

export default function ClientCard({client}: ClientCardProps) {
    const {removeClients} = useClientContext();

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

    return (
        <View style={ClientCardStyle.container}>
            <View style={ClientCardStyle.content}>
                <Text>
                    {client.name}
                </Text>
                <View style={ClientCardStyle.icons}>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        
                    >
                        <Icon
                            source="account-edit-outline"
                            size={24}
                        />
                    </TouchableOpacity>
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
            <TouchableOpacity
                activeOpacity={0.6}
            >
                <Text 
                    style={ClientCardStyle.link}
                >
                    Ver mais
                </Text>
            </TouchableOpacity>
        </View>
    );
}