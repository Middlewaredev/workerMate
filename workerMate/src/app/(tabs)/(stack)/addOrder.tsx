import AddItemOptions from "@/components/AddItemOptions";
import DefaultInput from "@/components/defaultInput";
import Header from "@/components/header";
import MainButton, { ButtonType } from "@/components/mainButton";
import TextAreaInput from "@/components/textAreaInput";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useClientContext } from "@/contexts/clientContext";
import { Client } from "@/libs/clientStorage";
import { layoutStyle } from "@/styles/layout";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import { Checkbox, Dialog, Portal, RadioButton, Text } from "react-native-paper";
import { Receivable } from "@/libs/receivableStorage";
import colors from "@/constants/colors";
import TotalDisplay from "@/components/totalDisplay";

export default function AddOrder() {

    const {clients} = useClientContext();
    const [client, setClient] = useState<Client>();
    const {clientId} = useLocalSearchParams();
    const [date, setDate] = useState<Date>();
    const [showCalendary, setShowCalendary] = useState<boolean>(false);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [payMethod, setPayMethod] = useState<Receivable["paymentMethod"]>();

    const showDialog = () => setDialogVisible(!dialogVisible);

    const generateReturnLink = (page: string) => {
        const originValue = `addOrder&clientId=${encodeURIComponent(clientId)}`;
        return `${page}/?origin=${originValue}`;
    };

    const [returnLink, setReturnLink] = useState<string>(generateReturnLink('clients'));

    const onChange = (event, selectedDate) => {
        setShowCalendary(false)
        const currentDate = selectedDate || date;
        setDate(currentDate);
    }

    const showDatePicker = () => {
        setShowCalendary(true)
    }

    useEffect(()=>{
        const client = clients.find((client) => {
            if (client.clientType === 'cpf') {
              return client.cpf === clientId;
            } else {
              return client.cnpj === clientId;
            }
        })
        setClient(client? client : undefined);
        setReturnLink(generateReturnLink('clients'));
    }, [clientId])

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
                        link={returnLink}
                        subtitle={client?.name}
                    />
                    <AddItemOptions
                        icon="calendar-month-outline"
                        title="Agenda"
                        fun={showDatePicker}
                        subtitle={date? date.toLocaleDateString() : "" }
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
                        link="addDiscount"
                    />
                    <AddItemOptions
                        icon="truck-fast-outline"
                        title="Taxas e Frete"
                    />
                    <TotalDisplay
                        label="Total"
                        value="000"
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
                        title="Meio de pagamento"
                        fun={showDialog}
                        subtitle={payMethod}
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
            {
                showCalendary && 
                <DateTimePicker
                    value={date ? date : new Date()}
                    mode='date'
                    display='default'
                    onChange={onChange}
                />
            }
            <Portal>
                <Dialog visible={dialogVisible} onDismiss={showDialog}>
                    <Dialog.Title style={{fontSize: 16}}>Selecione o meio de pagamento</Dialog.Title>
                    <Dialog.Content>
                        <RadioButton.Group onValueChange={value => setPayMethod(value)}  value={payMethod}>
                            <RadioButton.Item label="Boleto" value="Boleto" />
                            <RadioButton.Item label="Transferência Bancária" value="Transferência Bancária" />
                            <RadioButton.Item label="Dinheiro" value="Dinheiro" />
                            <RadioButton.Item label="Cheque" value="Cheque" />
                            <RadioButton.Item label="Cartão de Crédito" value="Cartão de Crédito" />
                            <RadioButton.Item label="Cartão de Débito" value="Cartão de Débito" />
                            <RadioButton.Item label="Pix" value="Pix" />
                        </RadioButton.Group>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <MainButton
                            title="Confirmar"
                            disabled={false}
                            type={ButtonType.primary}
                            pressFunction={showDialog}
                        />
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    );
}