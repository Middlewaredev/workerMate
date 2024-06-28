import { Icon, TextInput } from "react-native-paper";
import { DefaultInputStyle } from "./style";

export interface DefaultInputProps {
    label: string;
    icon?: string;
}

export default function DefaultInput({ label, icon }: DefaultInputProps) {
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
        />
    );
}