import { theme } from '@/constants/customTheme';
import { loadFonts } from '@/constants/fonts';
import { ActivityIndicator } from "react-native";
import { PaperProvider } from 'react-native-paper';
import Welcome from '@/(stack)/welcome';

export default function index(){
    const [fontsLoaded] = loadFonts();

    if (!fontsLoaded) {
        return <ActivityIndicator />
    }

    return (
        <PaperProvider theme={theme}>
            <Welcome />
        </PaperProvider>
    )
    
}
