import { 
    useFonts,
    Roboto_100Thin,
    Roboto_300Light, 
    Roboto_400Regular, 
    Roboto_500Medium, 
    Roboto_700Bold 
} from '@expo-google-fonts/roboto';

export const loadFonts = () => {
  return useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });
};

export const fonts = {
    regular: {
      fontFamily: 'Roboto_400Regular',
      fontWeight: 'normal',
      fontSize: 12
    },
    medium: {
      fontFamily: 'Roboto_500Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Roboto_300Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Roboto_100Thin',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'Roboto_700Bold',
      fontWeight: 'bold',
    },
    bodySmall: {
      fontFamily: 'Roboto_400Regular',
      fontWeight: 'normal',
      fontSize: 12
    },
    bodyLarge: {
      fontFamily: 'Roboto_400Regular',
      fontWeight: 'normal',
    },
    bodyMedium: {

    },
    labelLarge: {
      fontFamily: 'Roboto_500Medium',
      fontWeight: 'normal',
      fontSize: 24
    },
    headlineLarge: {
      fontFamily: 'Roboto_700Bold',
      fontWeight: 'bold',
      fontSize: 16,
      textTransform: 'uppercase',
    },
    headlineMedium: {
      fontFamily: 'Roboto_400Regular',
      fontWeight: 'normal',
      fontSize: 18,
    },
    headlineSmall: {

    },
    displayMedium: {
      fontFamily: 'Roboto_700Bold',
      fontWeight: 'bold',
      fontSize: 24,
    },
    displaySmall: {
      fontFamily: 'Roboto_700Bold',
      fontWeight: 'bold',
      fontSize: 20,
    },
    titleLarge: {}
  };