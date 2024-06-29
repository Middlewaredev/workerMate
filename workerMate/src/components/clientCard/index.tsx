import { TouchableOpacity, View } from "react-native";
import { Button, Icon, Text } from "react-native-paper";
import { ClientCardStyle } from "./style";
import colors from "@/constants/colors";

export interface ClientCardProps {
    clientName: string;
    type: string;
    email: string;
    phone: string;
}

export default function ClientCard({clientName, type, email, phone}: ClientCardProps) {
    return (
        <View style={ClientCardStyle.container}>
            <View style={ClientCardStyle.content}>
                <Text>
                    {clientName}
                </Text>
                <View style={ClientCardStyle.icons}>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        >
                        <Icon
                            source="account-edit-outline"
                            size={24}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.6}
                    >
                        <Icon
                            source="delete-outline"
                            size={24}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={ClientCardStyle.content}>
                <View style={ClientCardStyle.dualContent} >
                    <Text>Tipo:&nbsp;</Text>
                    <Text>{type}</Text>
                </View>
            </View>
            <View style={ClientCardStyle.content}>
                <View style={ClientCardStyle.dualContent}>
                    <Icon
                        source="email-outline"
                        size={16}
                    />                
                    <Text>
                        &nbsp;{email}
                    </Text>
                </View>
                <View style={ClientCardStyle.dualContent}>
                    <Icon
                        source="cellphone"
                        size={16}
                    />                
                    <Text>
                        &nbsp;{phone}
                    </Text>
                </View>
            </View>
            <Button>
                <Text 
                    style={ClientCardStyle.link}
                >
                    Ver mais
                </Text>
            </Button>
        </View>
    );
}