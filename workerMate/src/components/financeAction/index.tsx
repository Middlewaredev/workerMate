import { TouchableOpacity, View } from "react-native";
import { Icon, Text } from "react-native-paper";
import { FinanceActionStyle } from "./style";
import colors from "@/constants/colors";
import { Link } from "expo-router";

export interface FinanceActionProps {
    title: string;
    link: string;
    icon: string
}

export default function FinanceAction({title, link, icon}: FinanceActionProps) {
    return (
        <Link href={link} asChild>
            <TouchableOpacity
                style={FinanceActionStyle.container}
                activeOpacity={0.6}
            >
                <Icon
                    source={icon}
                    size={24}
                />
                <View style={FinanceActionStyle.textContainer}>
                <Text >
                    &nbsp;{title}
                </Text>
                </View>
                <Icon
                    source="chevron-right"
                    size={24}
                    color={colors.accent}
                />
            </TouchableOpacity>
        </Link>
    );
}