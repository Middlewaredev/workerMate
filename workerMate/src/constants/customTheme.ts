import { MD3LightTheme } from "react-native-paper"
import colors from "./colors"
import { fonts } from "./fonts"


export const theme ={
    ...MD3LightTheme,
    colors: {
        ...MD3LightTheme.colors,
        primary: colors.accent,
        background: colors.background,
        surface: colors.surface,
        accent: colors.accent,
        text: colors.text,
        onSurface: colors.onSurface,
        disabled: colors.disabled,
        placeholder: colors.placeholder,
        backdrop: colors.backdrop,
        border: colors.border
    },
    fonts: fonts,
}