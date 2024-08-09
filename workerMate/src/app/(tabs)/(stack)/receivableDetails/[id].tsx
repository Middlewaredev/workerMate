import Header from "@/components/header";
import { layoutStyle } from "@/styles/layout";
import { Picker } from "@react-native-picker/picker";
import { useCallback, useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Dialog, Icon, Portal, RadioButton, Text } from "react-native-paper";
import DateTimePicker from '@react-native-community/datetimepicker';
import ReceivableOptions from "@/components/AddItemOptions";
import MainButton, { ButtonType } from "@/components/mainButton";
import DefaultInput from "@/components/defaultInput";
import TextAreaInput from "@/components/textAreaInput";
import { useReceivableContext } from "@/contexts/receivableContext";
import { Receivable } from "@/libs/receivableStorage";
import { router, useFocusEffect, useLocalSearchParams } from "expo-router";
import colors from "@/constants/colors";
import TwoButtons from "@/components/twoButtons";
import { useClientContext } from "@/contexts/clientContext";
import { Client } from "@/libs/clientStorage";


export default function ReceivableDetails() {
    const { updateReceivableFunction, receivables } = useReceivableContext();
    const { clients } = useClientContext();
    const [client, setClient] = useState<Client>();
    const { id, disable } = useLocalSearchParams<{id: string, disable: string}>();
    const [receivable, setReceivable] = useState<Receivable | undefined>(undefined);
    const [disabled, setDisabled] = useState(true);
    const [status, setStatus] = useState<Receivable["status"]>('A receber')
    const [showCalendary, setShowCalendary] = useState<boolean>(false);
    const [visible, setVisible] = useState(false);
    const [payMethod, setPayMethod] = useState<Receivable["paymentMethod"]>();
    const [date, setDate] = useState<Date>();
    const [enableSave, setEnableSave] = useState<boolean>(false);
    const [value, setValue] = useState('')
    const [description, setDescription] = useState<string>('')
    const [additionalInfo, setAdditionalInfo] = useState<string>('')
    const [notes, setNotes] = useState<string>('')

    const header = 
    <View style={{
        width: '100%',
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'space-between'
    }}>
        <TouchableOpacity onPress={() => router.back()}>
            <Icon
                source="arrow-left"
                size={24}
            />
        </TouchableOpacity>
        <Text variant='displayMedium'>Detalhes do Recebimento</Text>
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => setDisabled(!disabled)}
        >
            <Icon
                source="credit-card-edit-outline"
                size={24}
                color={colors.accent}
            />
        </TouchableOpacity>
    </View>
    

    const showDialog = () => setVisible(true);
    const hideDialog = () => {
        setVisible(false)
    };

    const onChange = (event, selectedDate) => {
        setShowCalendary(false)
        const currentDate = selectedDate || date;
        setDate(currentDate);
    }

    const showDatePicker = () => {
        setShowCalendary(true)
    }

    useEffect(() =>{
        if(payMethod && date && value && value !== 'R$0,00'){
            setEnableSave(true)
        } else {
            setEnableSave(false)
        }
    }, [payMethod, date, value])

    const currencyToNumber = (value: string) => {
        if (!value) return 0;
        const numberString = value.replace(/[R$\s]/g, '').replace(',', '.');
        return parseFloat(numberString);
    };

    const handleSaveReceivable = () =>{
        const newReceivable = {
            date: date? date.toLocaleDateString() : "",
            value: currencyToNumber(value),
            clientName: "",
            description: description,
            additionalInfo: additionalInfo,
            notes: notes,
            orderNumber: '',
            paymentMethod: payMethod? payMethod : 'Boleto',
            status: status
        }
        updateReceivableFunction(id? id : '0', newReceivable)
        router.back()
    }
    const fillFields = (receivable: Receivable) => {
        const [day, month, year] = receivable.date.split('/').map(Number);
        setAdditionalInfo(receivable.additionalInfo);
        setDate(new Date(year, month-1, day));
        setDescription(receivable.description);
        setNotes(receivable.notes);
        setPayMethod(receivable.paymentMethod);
        setValue(receivable.value.toString());
        setStatus(receivable.status);
    }

    const handleCancel = () => {
        if(receivable){
            fillFields(receivable)
        }
        setDisabled(true)
    }

    useFocusEffect(
        useCallback(() => {
            setDisabled(!(disable === 'true'))
        }, [disable])
    );

    useEffect(() => {
        const foundReceivable = receivables.find(r => r.id === id);
        setReceivable(foundReceivable);
        if(foundReceivable){
            fillFields(foundReceivable)
        }
    }, [id]);

    useEffect(()=>{
        const client = clients.find((client) => {
            if (receivable?.clientType === 'cpf') {
              return client.cpf === receivable.clientId;
            } else {
              return client.cnpj === receivable?.clientId;
            }
        })
        setClient(client? client : undefined);
    }, [receivable])

    return (
        <View style={layoutStyle.container}>
            {header}
            <View style={layoutStyle.dropdownView}>
                <Picker
                    selectedValue={status}
                    onValueChange={(itemValue) => setStatus(itemValue)}
                    style={layoutStyle.dropdown}
                    enabled={!disabled}
                >
                    <Picker.Item label="A receber" value="A receber" style={disabled &&{ color: colors.disabled}}/>
                    <Picker.Item label="Recebido" value="Recebido" style={disabled &&{ color: colors.disabled}}/>
                    <Picker.Item label="Em atraso" value="Em atraso" style={disabled &&{ color: colors.disabled}}/>
                </Picker>
            </View>
            <ReceivableOptions
                icon="calendar-month-outline"
                title="Data do recebimento"
                fun={showDatePicker}
                subtitle={date? date.toLocaleDateString() : "" }
                disabled={disabled}
            />
            <ReceivableOptions
                icon="text-box-outline"
                title="Pedido"
                disabled={disabled}
                
            />
            <ReceivableOptions
                icon="account-outline"
                title="Cliente"
                disabled={disabled}
                subtitle={client?.name}
            />
            <ReceivableOptions
                icon="currency-usd"
                title="Meio de pagamento"
                fun={showDialog}
                subtitle={payMethod}
                disabled={disabled}
            />
            <DefaultInput
                label="Valor"
                textChange={setValue}
                contentType='MoneyValue'
                value={value}
                disabled={disabled}
            />
            <DefaultInput
                label="Valor referente ao que?"
                contentType='PlainText'
                textChange={setDescription}
                disabled={disabled}
                value={description}
            />
            <DefaultInput
                label="Informações adicionais"
                contentType='PlainText'
                textChange={setAdditionalInfo}
                disabled={disabled}
                value={additionalInfo}
            />
            <TextAreaInput
                label="Anotações"
                textChange={setNotes}
                disabled={disabled}
                value={notes}
            />
            <TwoButtons
                mainButtonTitle="Salvar"
                mainLink=""
                mainDisabled={disabled}
                mainPressFunction={handleSaveReceivable}
                
                secondaryButtonTitle="Cancelar"
                secondaryLink=""
                secondaryDisabled={disabled}
                secondaryPressFunction={handleCancel}
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