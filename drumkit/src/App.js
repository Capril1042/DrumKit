import React from "react";
import Chakra from "./Chakra";
import ChakraInfo from "./ChakraInfo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Chakra-Container">
        <Chakra />
      </div>
      <div className="Information-Container">
        <ChakraInfo />
      </div>
    </div>
  );
}

export default App;
