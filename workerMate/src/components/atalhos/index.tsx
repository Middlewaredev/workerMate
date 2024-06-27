import { View } from "react-native";
import { Icon, Text } from "react-native-paper";
import { AtalhosStyle } from "./style";

export interface AtalhosProps {
    title: string;
    icon: string;
}

export default function Atalhos({title, icon}: AtalhosProps) {
    return (
        <View style={AtalhosStyle.container}>
            <Icon
                source={icon}
                size={24}
            />
            <Text>
                {title}
            </Text>
        </View>
    );
}