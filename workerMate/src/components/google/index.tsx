import { TouchableOpacity, View } from "react-native";
import { Icon, Text } from "react-native-paper";
import { DividerStyle } from "./style";

export default function Google() {
    return (
        <>
            <View style={DividerStyle.container}>
                <View style={DividerStyle.line}/>
                <Text>
                    OU
                </Text>
                <View style={DividerStyle.line}/>
            </View>
            <TouchableOpacity
                activeOpacity={0.6}
                style={DividerStyle.google}
            >
                <Icon
                    source={{uri: 'https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA'}}
                    size={25}
                />
                <Text style={DividerStyle.googleText}>
                    Continuar com Google
                </Text>
            </TouchableOpacity>
        </>
    );
}