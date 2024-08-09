import { Link } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { Icon, Text } from "react-native-paper";
import { receivableOptionsStyle } from "./style";
import colors from "@/constants/colors";

export interface AddItemOptionsProps {
    icon: string,
    title: string,
    subtitle?: string,
    link?: string,
    disabled?: boolean,
    fun?: () => void
}

export default function AddItemOptions({icon, title, subtitle, link, disabled, fun}: AddItemOptionsProps){
    const content = (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={fun}
            style={receivableOptionsStyle.container}
            disabled={disabled}
        >
            <View style={{flexDirection: 'row'}}>
                <Icon
                    source={icon}
                    size={18}
                    color={disabled ? colors.disabled : colors.primary}
                />
                <View>
                    <Text style={disabled ? receivableOptionsStyle.titleDisabled : receivableOptionsStyle.title}> {title}</Text>
                    <Text style={receivableOptionsStyle.subtitle}> {subtitle}</Text>
                </View>
            </View>
            <Icon
                source="plus-circle-outline"
                size={18}
                color={disabled ? colors.disabled : colors.primary}
            />
        </TouchableOpacity>
    )
    return (
        link ? <Link href={link} asChild>{content}</Link> : content
    )
}