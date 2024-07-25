import { TouchableOpacity, View } from "react-native";
import { Icon, Text } from "react-native-paper";
import { HeaderStyle } from "./style";
import { router } from "expo-router";

export interface HeaderProps{
    title: string;
    returnTo?: string;
}

export default function Header({title, returnTo}: HeaderProps) {
    console.log(returnTo)
    return (
        <View style={HeaderStyle.container}>
            <TouchableOpacity onPress={() => {
                if(returnTo){
                    router.replace(returnTo)
                } else {
                    router.back()
                }
            }}>
                <Icon 
                    source="arrow-left"
                    size={24}
                />
            </TouchableOpacity>
            <Text variant='displayMedium' style={{marginLeft: 20}}>{title}</Text>
        </View>
    );
}