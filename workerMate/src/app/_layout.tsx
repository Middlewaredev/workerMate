import { theme } from '@/constants/customTheme';
import { loadFonts } from '@/constants/fonts';
import { ActivityIndicator } from "react-native";
import { PaperProvider } from 'react-native-paper';

export default function index(){
    const [fontsLoaded] = loadFonts();

    if (!fontsLoaded) {
        return <ActivityIndicator />
    }

    return (
        <PaperProvider theme={theme}>
            {null}
        </PaperProvider>
    )
    
}
