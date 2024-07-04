import { Text } from "react-native-paper";
import { TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { twoButtonsStyle } from "./style";

export interface TwoButtonsProps {
    //main button props
    mainButtonTitle: string;
    mainLink: string;
    mainDisabled?: boolean;
    mainPressFunction?: () => void; 
    
    //secondary button props
    secondaryButtonTitle: string;
    secondaryLink: string;
    secondaryDisabled?: boolean;
    secondaryPressFunction?: () => void;
}

export default function TwoButtons({
    mainButtonTitle,
    mainLink,
    mainDisabled,
    mainPressFunction,
    secondaryButtonTitle,
    secondaryLink,
    secondaryDisabled,
    secondaryPressFunction
}: TwoButtonsProps) {
    
    
    const content = (
        <View
            style={twoButtonsStyle.container}
        >
            <TouchableOpacity
                activeOpacity={0.6}
                style={mainDisabled ? twoButtonsStyle.disabledButton : twoButtonsStyle.secondaryButton}
                disabled={secondaryDisabled}
                onPress={secondaryPressFunction}
            >
                <Text
                    style={twoButtonsStyle.secondaryText}
                >
                    {secondaryButtonTitle}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={mainDisabled ? twoButtonsStyle.disabledButton : twoButtonsStyle.mainButton}
                disabled={mainDisabled}
                onPress={mainPressFunction}
            >
                <Text
                    style={twoButtonsStyle.mainText}
                >
                    {mainButtonTitle}
                </Text>
            </TouchableOpacity>
        </View>
    )
    return (
        mainLink ? <Link href={mainLink} asChild>{content}</Link> : content
    );
}