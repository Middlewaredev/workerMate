import { Icon, TextInput } from "react-native-paper";
import { DefaultInputStyle } from "./style";

export interface DefaultInputProps {
    label: string;
    value?: string;
    icon?: string;
    secure?: boolean;
    textChange?: (value: string) => void;
}

export default function DefaultInput({ label, value, icon, secure, textChange }: DefaultInputProps) {
    const labelContent = (
        <>
            {icon &&
                <Icon
                    source={icon}
                    size={20}
                />
            }
            {label}
        </>
    )
    return (
        <TextInput
            mode='outlined'
            label={labelContent}
            style={DefaultInputStyle.input}
            secureTextEntry={secure}
            onChangeText={textChange}
            value={value}
        />
    );
}