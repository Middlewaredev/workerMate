import { Alert, TouchableOpacity, View } from "react-native";
import { Icon, Text } from "react-native-paper";
import { receivableCardStyle } from "./style";
import { Link } from "expo-router";
import { ClientCardStyle } from "../clientCard/style";
import { useReceivableContext } from "@/contexts/receivableContext";

export interface ReceivableCardProps {
    group: {
        date: string;
        items: [{
            id: string;
            date: string;
            value: number;
            clientName: string;
            orderNumber: number;
            description: string;
            additionalInfo: string;
            notes: string;
            paymentMethod: string,
            status: string;
        }];
        total: number;
    }
}

export default function ReceivableCard({group}: ReceivableCardProps) {
    const { removeReceivable } = useReceivableContext();

    const confirmDeleteClient = (id: string) => {
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
                        <Link href="" asChild>
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
                            onPress={() => confirmDeleteClient(item.id)}
                        >
                            <Icon
                                source="delete-outline"
                                size={24}
                            />
                        </TouchableOpacity>
                    </View>
                    {item.clientName
                        &&
                        <Text
                            style={receivableCardStyle.subtitle}
                        >
                            {item.clientName}
                        </Text>
                    }
                    {item.orderNumber
                        &&
                        <View style={receivableCardStyle.itemContainer}>
                            <Text style={receivableCardStyle.contentDefinition}>Pedido nº: </Text>
                            <Text
                                style={receivableCardStyle.contentText}
                            >
                                {item.orderNumber}
                            </Text>
                        </View>
                    }
                    {item.description
                        &&
                        <View style={receivableCardStyle.itemContainer}>
                            <Text style={receivableCardStyle.contentDefinition}>Descrição: </Text>
                            <Text
                                style={receivableCardStyle.contentText}
                            >
                                {item.description}
                            </Text>
                        </View>
                    }
                    {item.additionalInfo
                        &&
                        <View style={receivableCardStyle.itemContainer}>
                            <Text style={receivableCardStyle.contentDefinition}>Informações: </Text>
                            <Text
                                style={receivableCardStyle.contentText}
                            >
                                {item.additionalInfo}
                            </Text>
                        </View>
                    }
                    <View style={receivableCardStyle.itemContainer}>
                        <Text style={receivableCardStyle.contentDefinition}>Meio de pagamento: </Text>
                        <Text style={receivableCardStyle.contentText}>{item.paymentMethod}</Text>
                    </View>
                    <View style={receivableCardStyle.itemContainer}>
                        <Text style={receivableCardStyle.contentDefinition}>Valor: </Text>
                        <Text style={receivableCardStyle.contentText}>R$ {item.value.toFixed(2)}</Text>
                    </View>
                    <Link href="" asChild>
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