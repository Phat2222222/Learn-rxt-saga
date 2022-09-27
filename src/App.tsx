import {
  ChakraProvider
} from "@chakra-ui/react";
import Route from "routes";
import { BrowserRouter } from "react-router-dom"; 
import Fonts from "style/fonts";
import theme from "style";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts/>
      <BrowserRouter>
        <Route />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
