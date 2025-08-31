import { LondrinaSolid_400Regular, useFonts } from "@expo-google-fonts/londrina-solid";


export default function useAppFonts() {
  const [fontsLoaded] = useFonts({
    LondrinaSolid_400Regular,
  });

  return fontsLoaded;
}