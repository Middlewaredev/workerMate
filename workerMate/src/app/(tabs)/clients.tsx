import ClientCard from "@/components/clientCard";
import DefaultInput from "@/components/defaultInput";
import Header from "@/components/header";
import MainButton, { ButtonType } from "@/components/mainButton";
import colors from "@/constants/colors";
import { useClientContext } from "@/contexts/clientContext";
import { layoutStyle } from "@/styles/layout";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useLayoutEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { Icon, Text } from "react-native-paper";
import { defaultTabBarStyle } from "./_layout";

export default function Clients() {

    const {origin, clientId} = useLocalSearchParams();
    const { clients } = useClientContext();
    const [id, setId] = useState<string>(clientId ? clientId : "")
    const [enableSelect, setEnableSelect] = useState<boolean>(origin !== 'home');
    const navigation = useNavigation();
    
    const [link, setLink] = useState(origin + (clientId ? "/?clientId="+ (clientId ? clientId : "") : ""));
    useEffect(()=>{
        setEnableSelect(origin !== 'home');
    },[origin])

    useEffect(() => {
        setLink(origin + (clientId ? "/?clientId="+id : ""))
    }, [id])

    useLayoutEffect(()=>{
        navigation.setOptions({
            tabBarStyle: enableSelect ? {display: 'none'} : defaultTabBarStyle,
            headerShown: !enableSelect,
        })
    }, [enableSelect])

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
                        selectable={enableSelect}
                        returnTo={origin}
                        onChangeFunction={setId}
                        selectedClientId={id}
                    />
                )}
            </View>
        </ScrollView>
    )

    return (
        <View style={layoutStyle.container}>
            {
                enableSelect && 
                <Header
                    title="Clientes"
                    returnTo={origin + (clientId ? "/?clientId="+ (clientId ? id : "") : "")}
                />
            }
            {clients.length > 0 ? withClients : noClients}
            <MainButton
                title="Adicionar Cliente"
                type={ButtonType.primary}
                link="(stack)/addClient"
                returnFrom={enableSelect? '': 'home'}
            />
        </View>
    );
}