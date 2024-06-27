import ClientTypeRadio from "@/components/clientTypeRadio";
import DefaultInput from "@/components/defaultInput";
import Header from "@/components/header";
import MainButton, { ButtonType } from "@/components/mainButton";
import TextAreaInput from "@/components/textAreaInput";
import { layoutStyle } from "@/styles/layout";
import { ScrollView, View } from "react-native";
import { Text } from "react-native-paper";

export default function AddClient() {
    return (
        <View style={layoutStyle.container}>
            <Header 
                title="Adicionar Cliente"
            />
            <ScrollView style={layoutStyle.scroll}>
                <View style={layoutStyle.scrollContent}>
                    <DefaultInput 
                        label="Nome"
                    />
                    <Text style={layoutStyle.topic}>
                        Tipo de cliente
                    </Text>
                    <ClientTypeRadio />
                    <DefaultInput 
                        label="CPF"
                    />
                    <Text style={layoutStyle.topic}>
                        Contatos
                    </Text>
                    <DefaultInput 
                        label="E-mail"
                    />
                    <DefaultInput 
                        label="Telefone com DDD"
                    />
                    <DefaultInput 
                        label="Telefone com DDD"
                    />
                    <Text style={layoutStyle.topic}>
                        Endereço
                    </Text>
                    <DefaultInput 
                        label="CEP"
                    />
                    <DefaultInput 
                        label="Logradouro (rua, avedina, etc.)"
                    />
                    <DefaultInput 
                        label="Número"
                    />
                    <DefaultInput 
                        label="Complemento (apto, casa, etc.)"
                    />
                    <DefaultInput 
                        label="Bairro"
                    />
                    <DefaultInput 
                        label="Cidade"
                    />
                    <DefaultInput 
                        label="Estado"
                    />
                    <Text style={layoutStyle.topic}>
                        Detalhes
                    </Text>
                    <TextAreaInput 
                        label="Anotações"
                    />
                </View>
            </ScrollView>
            <MainButton
                title="Salvar Cliente"
                type={ButtonType.primary}
                link="clients"
            />
        </View>
    );
}