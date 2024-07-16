import { Link } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { Icon, Text } from "react-native-paper";
import { receivableOptionsStyle } from "./style";

export interface ReceivableOptionsProps {
    icon: string,
    title: string,
    subtitle?: string,
    link?: string,
    fun?: () => void
}

export default function ReceivableOptions({icon, title, subtitle, link, fun}: ReceivableOptionsProps){
    const content = (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={fun}
            style={receivableOptionsStyle.container}
        >
            <View style={{flexDirection: 'row'}}>
                <Icon
                    source={icon}
                    size={18}
                />
                <View>
                    <Text style={receivableOptionsStyle.title}> {title}</Text>
                    <Text style={receivableOptionsStyle.subtitle}> {subtitle}</Text>
                </View>
            </View>
            <Icon
                source="plus-circle-outline"
                size={18}
            />
        </TouchableOpacity>
    )
    return (
        link ? <Link href={link} asChild>{content}</Link> : content
    )
}