import FinanceAction from "@/components/financeAction";
import FinancialDetails from "@/components/financialDetails";
import { layoutStyle } from "@/styles/layout";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { Text } from "react-native-paper";

export default function Finances() {
    const [selectedOption, setSelectedOption] = useState<string>('Hoje')
    return (
        <ScrollView>
            <View  style={layoutStyle.container}>
                <View style={layoutStyle.dropdownView}>
                    <Picker
                        selectedValue={selectedOption}
                        onValueChange={(itemValue) => setSelectedOption(itemValue)}
                        style={layoutStyle.dropdown}
                    >
                        <Picker.Item label="Hoje" value="Hoje" />
                        <Picker.Item label="Esta semana" value="Esta semana" />
                        <Picker.Item label="Semana passada" value="Semana passada" />
                        <Picker.Item label="Mês atual" value="Mês atual" />
                        <Picker.Item label="Últimos mês" value="Último mês" />
                        <Picker.Item label="Últimos 90 dias" value="Últimos 90 dias" />
                        <Picker.Item label="Ano corrente" value="Ano corrente" />
                        <Picker.Item label="Último ano" value="Último ano" />
                        <Picker.Item label="Custom" value="Custom" />
                    </Picker>
                </View>
                <FinancialDetails
                    title="Receita"
                    line1Title="Recebido"
                    line1Value="0,00"
                    line1Link="(stack)/recebidos/1"
                    line2Title="A receber"
                    line2Value="0,00"
                    line2Link="(stack)/recebidos/1"
                    line3Title="Em atraso"
                    line3Value="0,00"
                    line3Link="(stack)/recebidos/1"
                    subtitle="Receita total"
                    subtitleValue="0,00"
                />
                <FinancialDetails
                    title="Custos"
                    line1Title="Pago"
                    line1Value="0,00"
                    line1Link="(stack)/recebidos/1"
                    line2Title="Previsto"
                    line2Value="0,00"
                    line2Link="(stack)/recebidos/1"
                    line3Title="Em atraso"
                    line3Value="0,00"
                    line3Link="(stack)/recebidos/1"
                    subtitle="Custo total"
                    subtitleValue="0,00"
                />
                <View style={{width: '100%', paddingLeft: 30}}>
                    <Text style={{marginBottom: 10, fontSize: 16, fontWeight: 'bold'}}>Ações</Text>
                    <FinanceAction
                        title="Incluir recebimento"
                        link=""
                        icon="currency-usd"
                    />
                    <FinanceAction
                        title="Incluir custo"
                        link=""
                        icon="currency-usd-off"
                    />
                    <FinanceAction
                        title="Emitir recibo"
                        link=""
                        icon="checkbook"
                    />
                </View>
            </View>
        </ScrollView>
    );
}