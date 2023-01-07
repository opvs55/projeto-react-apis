import { useState } from "react";
import Router from "./routes/Router";
import { ChakraProvider } from "@chakra-ui/react";

function App() {

  const [cards, setCards] = useState(20)
  

  return (
    <ChakraProvider>
      <Router
       cards={cards}
       setCards={setCards} />
    </ChakraProvider>
  );
}

export default App;
