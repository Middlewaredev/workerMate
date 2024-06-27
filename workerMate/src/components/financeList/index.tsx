import { TouchableOpacity, View } from "react-native";
import { Icon, Text } from "react-native-paper";
import { OrderListStyle } from "./style";
import colors from "@/constants/colors";

export interface FinanceListProps {
    title: string;
    value: string;
    isVisible: boolean;
}

export default function FinanceList({title, value, isVisible}: FinanceListProps) {
    const mask = "•••••";
    return (
        <TouchableOpacity
            style={OrderListStyle.container}
            activeOpacity={0.6}
        >
            <Icon
                source="currency-usd"
                size={24}
                color={colors.accent}
            />
            <View style={OrderListStyle.textContainer}>
            <Text variant='headlineMedium'>
                {title}
            </Text>
            <Text variant='headlineMedium' >
                R$ {isVisible ? value : mask}
            </Text>
            </View>
            <Icon
                source="chevron-right"
                size={24}
            />
        </TouchableOpacity>
    );
}