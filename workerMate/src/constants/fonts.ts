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
  };