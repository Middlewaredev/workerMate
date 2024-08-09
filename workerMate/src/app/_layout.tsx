import { theme } from '@/constants/customTheme';
import { loadFonts } from '@/constants/fonts';
import { ActivityIndicator } from "react-native";
import { PaperProvider } from 'react-native-paper';
import { Slot } from 'expo-router';
import { ClientProvider } from '@/contexts/clientContext';
import { ReceivableProvider } from '@/contexts/receivableContext';
import { OrderProvider } from '@/contexts/orderContext';

export default function index(){
    const [fontsLoaded] = loadFonts();

    if (!fontsLoaded) {
        return <ActivityIndicator />
    }

    return (
        <ClientProvider>
            <ReceivableProvider>
                <OrderProvider>
                    <PaperProvider theme={theme}>
                        <Slot />
                    </PaperProvider>
                </OrderProvider>
            </ReceivableProvider>
        </ClientProvider>
    )
    
}
