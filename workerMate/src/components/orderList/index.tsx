import { TouchableOpacity, View } from "react-native";
import { Icon, Text } from "react-native-paper";
import { OrderListStyle } from "./style";

export interface OrderListProps {
    title: string
}

export default function OrderList({title}: OrderListProps) {
    return (
        <TouchableOpacity
            style={OrderListStyle.container}
            activeOpacity={0.6}
        >
            <View style={OrderListStyle.textContainer}>
            <Text variant='headlineMedium'>
                {title}
            </Text>
            <Text variant='headlineMedium'>
                0
            </Text>
            </View>
            <Icon
                source="chevron-right"
                size={24}
            />
        </TouchableOpacity>
    );
}