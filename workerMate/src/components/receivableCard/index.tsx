import { Alert, TouchableOpacity, View } from "react-native";
import { Icon, Text } from "react-native-paper";
import { receivableCardStyle } from "./style";
import { Link } from "expo-router";
import { ClientCardStyle } from "../clientCard/style";
import { useReceivableContext } from "@/contexts/receivableContext";
import { Receivable } from "@/libs/receivableStorage";
import { useClientContext } from "@/contexts/clientContext";

export interface ReceivableCardProps {
    group: {
        date: string;
        items: {
            receivable: Receivable;
        }[];
        total: number;
    }
}

export default function ReceivableCard({group}: ReceivableCardProps) {
    const { removeReceivable } = useReceivableContext();
    const { clients } = useClientContext();

    const disabled = 'true'
    const enabled = 'false'

    const confirmDeleteReceivable = (id: string) => {
        Alert.alert(
            'Excluir Recebimento',
            'Tem certeza de que deseja excluir este recebimento?',
            [
                {
                    text: 'Cancelar',
                },
                {
                    text: 'Excluir',
                    onPress: () => removeReceivable(id),
                },
            ],
            { cancelable: true }
        );
    };

    const getClientName = (clientId: string, clientType: string) => {
        const client = clients.find(c => clientType == 'cpf' ? c.cpf === clientId : c.cnpj === clientId )
        return client ? client.name : '';
    }

    return (
        <View
            style={receivableCardStyle.container}
        >
            <View
                style={receivableCardStyle.titleContainer}
            >
                <Text style={receivableCardStyle.title}>{group.date}</Text>
                <Text style={receivableCardStyle.titleValue}>R$ {group.total.toFixed(2)}</Text>
            </View>
            {group.items.map((item, index)=>(
                <View
                    key={index}
                    style={receivableCardStyle.contentContainer}
                >
                    <View
                        style={receivableCardStyle.iconsContainer}
                    >
                        <Link href={{ pathname: `receivableDetails/${item.receivable.id}`, params: { disable: disabled } }} asChild>
                            <TouchableOpacity
                                activeOpacity={0.6}
                            >
                                <Icon
                                    source="credit-card-edit-outline"
                                    size={24}
                                />
                            </TouchableOpacity>
                        </Link>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={() => confirmDeleteReceivable(item.receivable.id)}
                        >
                            <Icon
                                source="delete-outline"
                                size={24}
                            />
                        </TouchableOpacity>
                    </View>
                    {item.receivable.clientId
                        &&
                        <Text
                            style={receivableCardStyle.subtitle}
                        >
                            {getClientName(item.receivable.clientId, item.receivable.clientType)}
                        </Text>
                    }
                    {item.receivable.orderNumber
                        &&
                        <View style={receivableCardStyle.itemContainer}>
                            <Text style={receivableCardStyle.contentDefinition}>Pedido nº: </Text>
                            <Text
                                style={receivableCardStyle.contentText}
                            >
                                {item.receivable.orderNumber}
                            </Text>
                        </View>
                    }
                    {item.receivable.description
                        &&
                        <View style={receivableCardStyle.itemContainer}>
                            <Text style={receivableCardStyle.contentDefinition}>Descrição: </Text>
                            <Text
                                style={receivableCardStyle.contentText}
                            >
                                {item.receivable.description}
                            </Text>
                        </View>
                    }
                    {item.receivable.additionalInfo
                        &&
                        <View style={receivableCardStyle.itemContainer}>
                            <Text style={receivableCardStyle.contentDefinition}>Informações: </Text>
                            <Text
                                style={receivableCardStyle.contentText}
                            >
                                {item.receivable.additionalInfo}
                            </Text>
                        </View>
                    }
                    <View style={receivableCardStyle.itemContainer}>
                        <Text style={receivableCardStyle.contentDefinition}>Meio de pagamento: </Text>
                        <Text style={receivableCardStyle.contentText}>{item.receivable.paymentMethod}</Text>
                    </View>
                    <View style={receivableCardStyle.itemContainer}>
                        <Text style={receivableCardStyle.contentDefinition}>Valor: </Text>
                        <Text style={receivableCardStyle.contentText}>R$ {item.receivable.value.toFixed(2)}</Text>
                    </View>
                    <Link href={{ pathname: `receivableDetails/${item.receivable.id}`, params: { disable: enabled } }} asChild>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            style={{alignItems: 'center'}}
                        >
                            <Text 
                                style={ClientCardStyle.link}
                            >
                                Ver mais
                            </Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            ))}
        </View>
    );
}