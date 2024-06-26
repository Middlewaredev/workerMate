import { TouchableOpacity, View } from "react-native";
import { Icon, Text } from "react-native-paper";
import { HeaderStyle } from "./style";
import { useNavigation } from "expo-router";

export interface HeaderProps{
    title: string;
}

export default function Header({title}: HeaderProps) {
    const navigation = useNavigation();
    return (
        <View style={HeaderStyle.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon 
                    source="arrow-left"
                    size={24}
                />
            </TouchableOpacity>
            <Text variant='displayMedium' style={{marginLeft: 20}}>{title}</Text>
        </View>
    );
}