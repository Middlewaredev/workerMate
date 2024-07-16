import Header from "@/components/header";
import { layoutStyle } from "@/styles/layout";
import { FlatList, View } from "react-native";
import { useReceivableContext } from "@/contexts/receivableContext";
import { useMemo } from "react";
import { Icon, Text } from "react-native-paper";
import Footer from "@/components/footer";
import colors from "@/constants/colors";
import ReceivableCard from "@/components/receivableCard";

export default function Receivables() {

    const { receivables } = useReceivableContext();

    const groupedReceivables = useMemo(() => {
        const groups = receivables.reduce((acc, receivable) => {
            const date = receivable.date;
            if(!acc[date]){
                acc[date] = {
                    date,
                    total: 0,
                    items: [],
                };
            }
            acc[date].items.push(receivable);
            acc[date].total += receivable.value;
            return acc;
        }, {})
        return Object.values(groups);
    }, [receivables]);

    const totalSum = useMemo(() => {
        return groupedReceivables.reduce((acc, group) => acc + group.total, 0);
    }, [groupedReceivables]);


    const fullContent = (
        <FlatList
            data={groupedReceivables}
            keyExtractor={(item, index) => index.toString()}
            style={{flex: 1, width: '100%'}}
            renderItem={({item}) => (
                <ReceivableCard
                    group={item}
                />
            )}
        />
    )

    const emptyContent = (
        <View style={{flex: 1, alignItems: "center", marginTop: 40}}>
            <Icon
                source="alert-circle-outline"
                size={200}
                color={colors.disabled}
            />
            <Text style={{color: colors.disabled}}>Nenhum recebivel lançado</Text>
        </View>
    )

    return (
        <View style={layoutStyle.container}>
            <Header
                title="A receber"
                returnTo="finances"
            />
            {
                receivables.length !== 0
                ? fullContent
                : emptyContent
            }
            <Footer
                link="(stack)/addReceivable"
                value={totalSum.toFixed(2)}
            />
        </View>
    );
}