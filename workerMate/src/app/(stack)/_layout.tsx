import { Stack } from "expo-router";

export default function StackLayout (){
    return (
        <Stack
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="index" />
            <Stack.Screen name="createAccount" />
            <Stack.Screen name="privacyPolicy" />
            <Stack.Screen name="login" />
            <Stack.Screen name="recoverPassword" />
        </Stack>
    )
}