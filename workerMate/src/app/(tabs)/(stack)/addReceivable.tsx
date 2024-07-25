import Header from "@/components/header";
import { layoutStyle } from "@/styles/layout";
import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { Dialog, Portal, RadioButton } from "react-native-paper";
import DateTimePicker from '@react-native-community/datetimepicker';
import ReceivableOptions from "@/components/receivableOptions";
import MainButton, { ButtonType } from "@/components/mainButton";
import DefaultInput from "@/components/defaultInput";
import TextAreaInput from "@/components/textAreaInput";
import { useReceivableContext } from "@/contexts/receivableContext";
import { Receivable } from "@/libs/receivableStorage";
import { router, useLocalSearchParams } from "expo-router";
import { useClientContext } from "@/contexts/clientContext";
import { Client } from "@/libs/clientStorage";

export default function AddReceivable() {
    const { addReceivable } = useReceivableContext();
    const {clients} = useClientContext();
    const {clientId} = useLocalSearchParams();
    const [client, setClient] = useState<Client>();
    const [selectedOption, setSelectedOption] = useState<Receivable["status"]>('A receber')
    const [showCalendary, setShowCalendary] = useState<boolean>(false);
    const [visible, setVisible] = useState(false);
    const [payMethod, setPayMethod] = useState<Receivable["paymentMethod"]>();
    const [date, setDate] = useState<Date>();
    const [enableSave, setEnableSave] = useState<boolean>(false);
    const [value, setValue] = useState('')
    const [description, setDescription] = useState<string>('')
    const [additionalInfo, setAdditionalInfo] = useState<string>('')
    const [notes, setNotes] = useState<string>('')
    const [encodeLink, setEncodeLink] = useState<string>(encodeURIComponent(`addReceivable&clientId=${clientId}`))
    const [returnLink, setReturnLink] = useState<string>(`clients/?origin=${encodeLink}`);

    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    const onChange = (event, selectedDate) => {
        setShowCalendary(false)
        const currentDate = selectedDate || date;
        setDate(currentDate);
    }

    const showDatePicker = () => {
        setShowCalendary(true)
    }

    const handleLink = () => {
        const originValue = `addReceivable&clientId=${encodeURIComponent(clientId)}`
        setEncodeLink(encodeURIComponent(originValue));
        setReturnLink(`clients/?origin=${originValue}`);
    }

    useEffect(() =>{
        if(payMethod && date && value && value !== 'R$0,00'){
            setEnableSave(true)
        } else {
            setEnableSave(false)
        }
    }, [payMethod, date, value])

    useEffect(()=>{
        const client = clients.find((client) => {
            if (client.clientType === 'cpf') {
              return client.cpf === clientId;
            } else {
              return client.cnpj === clientId;
            }
        })
        setClient(client? client : undefined);
        handleLink();
    }, [clientId])

    const currencyToNumber = (value: string) => {
        if (!value) return 0;
        // Remove the currency symbol and replace the comma with a dot
        const numberString = value.replace(/[R$\s]/g, '').replace(',', '.');
        return parseFloat(numberString);
    };

    const handleSaveReceivable = () =>{
        const newReceivable = {
            id: "1",
            date: date? date.toLocaleDateString() : "",
            value: currencyToNumber(value),
            clientId: client?.clientType == 'cpf' ? client.cpf : client?.cnpj,
            clientType: client?.clientType,
            description: description,
            additionalInfo: additionalInfo,
            notes: notes,
            orderNumber: '',
            paymentMethod: payMethod? payMethod : 'Boleto',
            status: selectedOption
        }
        addReceivable(newReceivable)
        router.back()
    }

    return (
        <View style={layoutStyle.container}>
            <Header 
                title="Lançar Recebimento"
            />
            <View style={layoutStyle.dropdownView}>
                <Picker
                    selectedValue={selectedOption}
                    onValueChange={(itemValue) => setSelectedOption(itemValue)}
                    style={layoutStyle.dropdown}
                >
                    <Picker.Item label="A receber" value="A receber" />
                    <Picker.Item label="Recebido" value="Recebido" />
                    <Picker.Item label="Em atraso" value="Em atraso" />
                </Picker>
            </View>
            <ReceivableOptions
                icon="calendar-month-outline"
                title="Data do recebimento"
                fun={showDatePicker}
                subtitle={date? date.toLocaleDateString() : "" }
            />
            <ReceivableOptions
                icon="text-box-outline"
                title="Pedido"
                
            />
            <ReceivableOptions
                icon="account-outline"
                title="Cliente"
                link={returnLink}
                subtitle={client?.name}
            />
            <ReceivableOptions
                icon="currency-usd"
                title="Meio de pagamento"
                fun={showDialog}
                subtitle={payMethod}
            />
            <DefaultInput
                label="Valor"
                textChange={setValue}
                contentType='MoneyValue'
                value={value}
            />
            <DefaultInput
                label="Valor referente ao que?"
                contentType='PlainText'
                textChange={setDescription}
            />
            <DefaultInput
                label="Informações adicionais"
                contentType='PlainText'
                textChange={setAdditionalInfo}
            />
            <TextAreaInput
                label="Anotações"
                textChange={setNotes}
            />
            <MainButton
                title="Salvar"
                type={ButtonType.primary}
                disabled={!enableSave}
                pressFunction={handleSaveReceivable}
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
                <Dialog visible={visible} onDismiss={hideDialog}>
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
                            pressFunction={hideDialog}
                        />
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    );
}