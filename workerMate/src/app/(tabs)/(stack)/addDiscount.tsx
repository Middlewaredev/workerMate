import DiscountCard from "@/components/discountCard";
import Header from "@/components/header";
import TotalDisplay from "@/components/totalDisplay";
import TwoButtons from "@/components/twoButtons";
import { layoutStyle } from "@/styles/layout";
import { ScrollView, View } from "react-native";
import { Text } from "react-native-paper";


export default function AddDiscount() {

    return (
        <View style={layoutStyle.container}>
            <Header
                title="Descontos"
            />
            <ScrollView style={layoutStyle.scroll}>
                <View style={layoutStyle.scrollContent}>
                    <Text style={layoutStyle.topic}>
                        Desconto sobre os serviços
                    </Text>
                    <DiscountCard />
                    <Text style={layoutStyle.topic}>
                        Desconto sobre as peças
                    </Text>
                    <DiscountCard />
                    <Text style={layoutStyle.topic}>
                        Desconto sobre o pedido
                    </Text>
                    <DiscountCard />
                    <TotalDisplay
                        label="Total de desconto"
                        value="000"
                    />
                    <TotalDisplay
                        label="Valor do pedido com desconto"
                        value="000"
                    />
                    <TwoButtons 
                        mainButtonTitle="Aplicar desconto"
                        mainLink=""
                        secondaryButtonTitle="Cancelar"
                        secondaryLink=""
                    />
                </View>
            </ScrollView>
        </View>
    )
}