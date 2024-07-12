import { View } from "react-native";
import { financialDetailsStyle } from "./style";
import { Text } from "react-native-paper";
import LineItem from "./lineItem";

export interface FinancialDetailsProps{
    title: string,
    line1Title: string,
    line1Value: string,
    line1Link: string,
    line2Title: string,
    line2Value: string,
    line2Link: string,
    line3Title: string,
    line3Value: string,
    line3Link: string,
    subtitle: string,
    subtitleValue: string
}

export default function FinancialDetails({
    title,
    line1Title,
    line1Value,
    line1Link,
    line2Title,
    line2Value,
    line2Link,
    line3Title,
    line3Value,
    line3Link,
    subtitle,
    subtitleValue
}: FinancialDetailsProps) {
    return (
        <View style={financialDetailsStyle.container}>
            <Text style={financialDetailsStyle.title}>{title}</Text>
            <LineItem 
                title={line1Title}
                value={line1Value}
                link={line1Link}
            />
            <LineItem 
                title={line2Title}
                value={line2Value}
                link={line2Link}
            />
            <LineItem
                title={line3Title}
                value={line3Value}
                link={line3Link}
            />
            <View style={financialDetailsStyle.subTitleContainer}>
                <Text style={financialDetailsStyle.title}>{subtitle}</Text>
                <Text style={financialDetailsStyle.title}>R$ {subtitleValue}</Text>
            </View>
        </View>
    );
}