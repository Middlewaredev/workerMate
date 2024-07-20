import { Text } from "react-native-paper";
import { MainButtonStyle } from "./style";
import { TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export enum ButtonType {
    primary = "Primary",
    secondary = "Secondary"
};

export interface MainButtonProps {
    title: string;
    link?: string;
    type: ButtonType;
    disabled?: boolean;
    returnFrom?: string;
    pressFunction?: () => void; 
}

export default function MainButton({
        title,
        link,
        type,
        disabled,
        returnFrom,
        pressFunction
}: MainButtonProps) {
    const buttonStyle = disabled
        ? MainButtonStyle.disabled
        : type === 'Primary'
        ? MainButtonStyle.primary
        : MainButtonStyle.secondary;
    
    const content = (
        <TouchableOpacity
            activeOpacity={0.6}
            style={buttonStyle}
            disabled={disabled}
            onPress={pressFunction}
        >
            <Text
                style={MainButtonStyle.content}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
    return (
        link ? <Link href={{pathname: link, params: {origin: returnFrom}}} asChild>{content}</Link> : content
    );
}