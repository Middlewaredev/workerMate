import { Stack } from "expo-router";

export default function TabsStackLayout (){
    return (
        <Stack
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="addClient" />
            <Stack.Screen name="addReceivable" />
            <Stack.Screen name="clientDetails/[id]" />
            <Stack.Screen name="receivables/[id]" />
            <Stack.Screen name="receivableDetails/[id]" />
        </Stack>
    )
}