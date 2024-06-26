import { TouchableOpacity, View } from "react-native";
import { Icon, Text } from "react-native-paper";
import { AgendaCardStyle } from "./style";

export default function AgendaCard() {
    return (
        <TouchableOpacity 
            style={AgendaCardStyle.container}
            activeOpacity={0.6}
        >
            <Text>
                Nome do Serviço
            </Text>
            <View style={AgendaCardStyle.agenda}>
                <View style={AgendaCardStyle.item}>
                    <Icon
                        source="clock-outline"
                        size={24}
                    />
                    <Text variant='bodySmall'>
                        HH:HH
                    </Text>
                </View>
                <View style={AgendaCardStyle.item}>
                    <Icon
                        source="calendar-outline"
                        size={24}
                    />
                    <Text variant='bodySmall'>
                        DD/MM/AAAA
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}