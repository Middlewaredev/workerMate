import DefaultInput from "@/components/defaultInput";
import Header from "@/components/header";
import MainButton, { ButtonType } from "@/components/mainButton";
import colors from "@/constants/colors";
import { useOrderContext } from "@/contexts/orderContext";
import { layoutStyle } from "@/styles/layout";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { ScrollView, View } from "react-native";
import { Icon, Text } from "react-native-paper";

export default function Orders() {

    const {origin, clientId} = useLocalSearchParams();
    const { orders } = useOrderContext();
    const navigation = useNavigation();
    
    const noOrders = (
        <View style={{flex: 1, alignItems: "center", marginTop: 40}}>
            <Icon
                source="file-document-outline"
                size={200}
                color={colors.disabled}
            />
            <Text style={{color: colors.disabled}}>
                Nenhum pedido cadastrado
            </Text>
        </View>
    )

    const withOrders = (
        <ScrollView style={{flex: 1, width: '100%'}}>
            <View style={{alignItems: "center"}}>
                <DefaultInput
                    label="Buscar cliente"
                    icon="account-search-outline"
                    contentType="PlainText"
                />
                
            </View>
        </ScrollView>
    )

    return (
        <View style={layoutStyle.container}>
            <Header
                title="Pedidos"
                returnTo={origin?.toString() ?? ''}
            />
            {orders.length > 0 ? withOrders : noOrders}
            <MainButton
                title="Adicionar Pedido"
                type={ButtonType.primary}
                link="(stack)/addOrder"
            />
        </View>
    );
}