import { Icon, Text, TextInput } from "react-native-paper";
import { DefaultInputStyle } from "./style";
import { textStyle } from "@/styles/text";

export interface DefaultInputProps {
    label: string;
    value?: string;
    icon?: string;
    secure?: boolean;
    errorMessage?: string;
    textChange?: (value: string) => void;
    blurFunction?: () => void;
}

export default function DefaultInput({ label, value, icon, secure, errorMessage, textChange, blurFunction }: DefaultInputProps) {
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
        <>
            <TextInput
                mode='outlined'
                label={labelContent}
                style={DefaultInputStyle.input}
                secureTextEntry={secure}
                onChangeText={textChange}
                onBlur={blurFunction}
                value={value}
                error={errorMessage ? true: false}
            />
            { errorMessage &&
                <Text
                    variant='bodySmall'
                    style={textStyle.error}
                >
                    {errorMessage}
                </Text>
            }
        </>
    );
}