import { Stack } from "expo-router";

export default function TabsStackLayout (){
    return (
        <Stack
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="addClient" />
            <Stack.Screen name="clientDetails/[id]" />
        </Stack>
    )
}