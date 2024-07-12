import { TouchableOpacity, View } from "react-native";
import { Icon, Text } from "react-native-paper";
import { financialDetailsStyle } from "./style";
import { Link } from "expo-router";

export interface LineItemProps {
    title: string,
    value: string,
    link: string
}

export default function LineItem({
    title,
    value,
    link
}: LineItemProps) {
    const content = (
        <TouchableOpacity
            activeOpacity={0.6}
            style={financialDetailsStyle.lineContainer}
        >
            <Text style={financialDetailsStyle.lineTexts}>{title}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={financialDetailsStyle.lineTexts}>R$ {value}</Text>
                <Icon
                    source="chevron-right"
                    size={16}
                />
            </View>
        </TouchableOpacity>
    )
    return <Link href={link} asChild>{content}</Link>;
}