import { TextInput } from "react-native-paper";
import { TextAreaInputStyle } from "./style";

export interface TextAreaInputProps {
    label: string;
    textChange?: (value: string) => void;
}

export default function TextAreaInput({ label, textChange }: TextAreaInputProps) {
    return (
        <TextInput
            mode='outlined'
            label={label}
            style={TextAreaInputStyle.input}
            multiline={true}
            numberOfLines={3}
            onChangeText={textChange}
        />
    );
}