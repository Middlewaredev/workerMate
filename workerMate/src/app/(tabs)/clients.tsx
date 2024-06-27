import MainButton, { ButtonType } from "@/components/mainButton";
import colors from "@/constants/colors";
import { layoutStyle } from "@/styles/layout";
import { View } from "react-native";
import { Icon, Text } from "react-native-paper";

export default function Clients() {
    return (
        <View style={layoutStyle.container}>
            <View style={{flex: 1, alignItems: "center", marginTop: 40}}>
                <Icon
                    source="account-outline"
                    size={200}
                    color={colors.disabled}
                />
                <Text style={{color: colors.disabled}}>
                    Nenhum cliente cadastrado
                </Text>
            </View>
            <MainButton
                title="Adicionar Cliente"
                type={ButtonType.primary}
                link=""
            />
        </View>
    );
}