import { Center, NativeBaseProvider, Text } from "native-base";
import { StatusBar } from "native-base";
import { THEME } from "./src/theme";

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Center flex={1}>
        <Text color="blue.900">initial</Text>
      </Center>
    </NativeBaseProvider>
  );
}
