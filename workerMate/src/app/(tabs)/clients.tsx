import ClientCard from "@/components/clientCard";
import DefaultInput from "@/components/defaultInput";
import MainButton, { ButtonType } from "@/components/mainButton";
import colors from "@/constants/colors";
import { useClientContext } from "@/contexts/clientContext";
import { layoutStyle } from "@/styles/layout";
import { ScrollView, View } from "react-native";
import { Icon, Text } from "react-native-paper";

export default function Clients() {

    const { clients } = useClientContext();

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
                    contentType="PlainText"
                />
                {clients.map((client, index) => 
                    <ClientCard
                        client={client}
                        key={index}
                    />
                )}
            </View>
        </ScrollView>
    )

    return (
        <View style={layoutStyle.container}>
            {clients.length > 0 ? withClients : noClients}
            <MainButton
                title="Adicionar Cliente"
                type={ButtonType.primary}
                link="(stack)/addClient"
                
            />
        </View>
    );
}