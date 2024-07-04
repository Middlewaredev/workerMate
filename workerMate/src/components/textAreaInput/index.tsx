import { TextInput } from "react-native-paper";
import { TextAreaInputStyle } from "./style";

export interface TextAreaInputProps {
    label: string;
    value?: string;
    disabled?: boolean;
    textChange?: (value: string) => void;
}

export default function TextAreaInput({ label, value, disabled, textChange }: TextAreaInputProps) {
    return (
        <TextInput
            mode='outlined'
            label={label}
            style={TextAreaInputStyle.input}
            multiline={true}
            numberOfLines={3}
            onChangeText={textChange}
            value={value}
            disabled={disabled}
        />
    );
}