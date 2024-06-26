import colors from "@/constants/colors";
import { SafeAreaView } from "react-native";
import { Icon, Text } from "react-native-paper";
import { PageHeaderStyle } from "./style";

export interface PageHeaderProps{
    title: string;
}

export default function PageHeader({title}: PageHeaderProps) {
    return (
        <SafeAreaView
            style={PageHeaderStyle.container}
        >
            <Icon
                source="menu"
                size={24}
                color={colors.surface}
            />
            <Text
                variant='displaySmall'
                style={PageHeaderStyle.content}
            >
                {title}
            </Text>
        </SafeAreaView>
    );
}