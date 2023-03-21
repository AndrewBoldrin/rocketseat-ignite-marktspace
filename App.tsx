import { Center, NativeBaseProvider, Text } from "native-base";
import { StatusBar } from "native-base";

import { THEME } from "./src/theme";
import {
  Karla_400Regular,
  Karla_700Bold,
  useFonts,
} from "@expo-google-fonts/karla";

export default function App() {
  const [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Center flex={1}>
        {fontsLoaded ? (
          <Text color="blue.900" fontFamily="heading">
            font carregada
          </Text>
        ) : (
          <Text color="blue.900">font não carregada</Text>
        )}
      </Center>
    </NativeBaseProvider>
  );
}
