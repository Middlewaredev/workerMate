import { Text } from "react-native-paper";
import { MainButtonStyle } from "./style";
import colors from "@/constants/colors";
import { TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export enum ButtonType {
    primary = "Primary",
    secondary = "Secondary"
};

export interface MainButtonProps {
    title: string;
    link: string;
    type: ButtonType;
    disabled?: boolean
}

export default function MainButton({
        title,
        link,
        type,
        disabled
}: MainButtonProps) {
    const buttonStyle = disabled
        ? MainButtonStyle.disabled
        : type === 'Primary'
        ? MainButtonStyle.primary
        : MainButtonStyle.secondary;
    return (
        <Link href={link} asChild>
            <TouchableOpacity
                activeOpacity={0.6}
                style={buttonStyle}
                disabled={disabled}
            >
                <Text
                    style={MainButtonStyle.content}
                >
                    {title}
                </Text>
            </TouchableOpacity>
        </Link>
    );
}