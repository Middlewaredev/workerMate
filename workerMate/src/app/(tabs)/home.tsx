import AgendaCard from "@/components/agendaCard";
import Atalhos from "@/components/atalhos";
import FinanceList from "@/components/financeList";
import OrderList from "@/components/orderList";
import colors from "@/constants/colors";
import { layoutStyle } from "@/styles/layout";
import { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Icon, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {

    const [eyeOpen, setEyeOpen] = useState(false);
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
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20,
                    justifyContent: 'space-between',
                    marginRight: 40
                }}>
                    <Text
                        variant='labelLarge'
                    >
                        Resumo Financeiro
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => setEyeOpen(!eyeOpen)}
                    >
                        <Icon
                            source={eyeOpen ? "eye-outline" : "eye-off-outline"}
                            size={24}
                            
                        />
                    </TouchableOpacity>
                </View>
                <FinanceList
                    title="A receber"
                />
                <FinanceList
                    title="Em atraso"
                />
                <FinanceList
                    title="Saldo atual"
                />
                <Text
                    variant='labelLarge'
                    style={{marginTop: 20}}
                >
                    Atalhos
                </Text>
                <Atalhos
                    title="Catalogo de Serviços"
                    icon="clipboard-text-outline"
                />
                <Atalhos
                    title="Catalogo de Peças"
                    icon="wrench-outline"
                />
            </ScrollView>
        </SafeAreaView>
    );
}