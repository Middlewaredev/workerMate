import AgendaCard from "@/components/agendaCard";
import FinanceList from "@/components/financeList";
import OrderList from "@/components/orderList";
import colors from "@/constants/colors";
import { layoutStyle } from "@/styles/layout";
import { ScrollView, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
    return (
        <SafeAreaView style={layoutStyle.containerJustified}>
            <ScrollView style={{}}>
                <Text variant='labelLarge'>
                    Próximos Agendamentos
                </Text>
                <ScrollView
                    horizontal
                >
                    <AgendaCard />
                    <AgendaCard />
                    <AgendaCard />
                    <AgendaCard />
                </ScrollView>
                <TouchableOpacity
                    activeOpacity={0.6}
                >
                    <Text
                        variant='bodySmall'
                        style={{
                            color: colors.accent,
                            textAlign: 'right',
                            width: '95%',
                            marginTop: 5,
                            marginBottom: 10
                        }}
                    >
                        Ver todos
                    </Text>
                </TouchableOpacity>
                <Text
                    variant='labelLarge'
                    style={{marginBottom: 6}}
                >
                    Todos os Pedidos
                </Text>
                <OrderList
                    title="Aguardando aprovação"
                />
                <OrderList
                    title="Aprovado"
                />
                <OrderList
                    title="Em andamento"
                />
                <OrderList
                    title="Aguardando pagamento"
                />
                <OrderList
                    title="Concluído"
                />
                <OrderList
                    title="Cancelado"
                />
                <Text
                    variant='labelLarge'
                    style={{marginTop: 20}}
                >
                    Resumo Financeiro
                </Text>
                <FinanceList
                    title="A receber"
                />
                <FinanceList
                    title="Em atraso"
                />
                <FinanceList
                    title="Saldo atual"
                />
            </ScrollView>
        </SafeAreaView>
    );
}