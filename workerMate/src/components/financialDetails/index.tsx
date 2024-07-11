import { View } from "react-native";
import { financialDetailsStyle } from "./style";
import { Text } from "react-native-paper";
import LineItem from "./lineItem";

export interface FinancialDetailsProps{
    title: string,
    line1Title: string,
    line1Value: string,
    line2Title: string,
    line2Value: string,
    line3Title: string,
    line3Value: string,
    subtitle: string,
    subtitleValue: string
}

export default function FinancialDetails({
    title,
    line1Title,
    line1Value,
    line2Title,
    line2Value,
    line3Title,
    line3Value,
    subtitle,
    subtitleValue
}: FinancialDetailsProps) {
    return (
        <View style={financialDetailsStyle.container}>
            <Text style={financialDetailsStyle.title}>{title}</Text>
            <LineItem 
                title={line1Title}
                value={line1Value}
            />
            <LineItem 
                title={line2Title}
                value={line2Value}
            />
            <LineItem
                title={line3Title}
                value={line3Value}
            />
            <View style={financialDetailsStyle.subTitleContainer}>
                <Text style={financialDetailsStyle.title}>{subtitle}</Text>
                <Text style={financialDetailsStyle.title}>R$ {subtitleValue}</Text>
            </View>
        </View>
    );
}