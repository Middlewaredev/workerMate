import AddItemOptions from "@/components/AddItemOptions";
import DefaultInput from "@/components/defaultInput";
import Header from "@/components/header";
import MainButton, { ButtonType } from "@/components/mainButton";
import TextAreaInput from "@/components/textAreaInput";
import { layoutStyle } from "@/styles/layout";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import { Text } from "react-native-paper";

export default function AddOrder() {

    return (
        <View style={layoutStyle.container}>
            <Header
                title="Adicionar Pedido"
                returnTo="orders"
            />
            <ScrollView style={layoutStyle.scroll}>
                <View style={layoutStyle.scrollContent}>
                    <Text style={layoutStyle.topic}>
                        Pedido n. 1
                    </Text>
                    <AddItemOptions
                        icon="account-outline"
                        title="Cliente"
                    />
                    <AddItemOptions
                        icon="calendar-month-outline"
                        title="Agenda"
                    />
                    <Text style={layoutStyle.topic}>
                        Pedido
                    </Text>
                    <AddItemOptions
                        icon="clipboard-text-outline"
                        title="Serviços"
                    />
                    <AddItemOptions
                        icon="wrench-outline"
                        title="Peças"
                    />
                    <AddItemOptions
                        icon="tag-outline"
                        title="Desconto"
                    />
                    <AddItemOptions
                        icon="truck-fast-outline"
                        title="Taxas e Frete"
                    />
                    <Text style={layoutStyle.topic}>
                        Detalhes
                    </Text>
                    <AddItemOptions
                        icon="file-document-outline"
                        title="Condições de Pagamento"
                    />
                    <AddItemOptions
                        icon="credit-card-outline"
                        title="Meios de Pagamento"
                    />
                    <AddItemOptions
                        icon="shield-check-outline"
                        title="Garantia"
                    />
                    <DefaultInput
                        label="Informações adicionais"
                        contentType='PlainText'
                    />
                    <TextAreaInput
                        label="Anotações"
                    />
                </View>
            </ScrollView>
            <MainButton
                title="Salvar Pedido"
                type={ButtonType.primary}
                link=""
            />
        </View>
    );
}