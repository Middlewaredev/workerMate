import { TextInput } from "react-native-paper";
import { DefaultInputStyle } from "./style";

export interface DefaultInputProps {
    label: string;
}

export default function DefaultInput({ label }: DefaultInputProps) {
    return (
        <TextInput
            mode='outlined'
            label={label}
            style={DefaultInputStyle.input}
        />
    );
}