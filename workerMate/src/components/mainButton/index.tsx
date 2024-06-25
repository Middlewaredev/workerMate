import { Text } from "react-native-paper";
import { MainButtonStyle } from "./style";
import colors from "@/constants/colors";
import { TouchableOpacity } from "react-native";

export interface MainButtonProps {
    title: string;
}

export default function MainButton({title}: MainButtonProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            style={MainButtonStyle.button}
        >
            <Text
                style={MainButtonStyle.content}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}