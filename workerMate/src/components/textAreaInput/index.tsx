import { TextInput } from "react-native-paper";
import { TextAreaInputStyle } from "./style";

export interface TextAreaInputProps {
    label: string;
}

export default function TextAreaInput({ label }: TextAreaInputProps) {
    return (
        <TextInput
            mode='outlined'
            label={label}
            style={TextAreaInputStyle.input}
            multiline={true}
            numberOfLines={3}
        />
    );
}