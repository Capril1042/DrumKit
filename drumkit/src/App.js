import React, { useState } from "react";

import ChakraData from "./ChakraData";
import ChakraInfo from "./ChakraInfo";

import "./Chakra.css";
import "./App.css";

function App() {
  const [data] = useState({ chakras: ChakraData.reverse() });
  const [chakra, setChakra] = useState(null);

  const handleClick = e => {
    let chakraId = e.target.getAttribute("value");
    let newChakra = data.chakras.reverse()[Number(chakraId) - 1];
    setChakra({ chakra: newChakra });
    e.preventDefault();

    console.log('App')
    console.log(chakra);
  };

  return (
    <div className="App">
      <div className="Chakra-Container">
        <div>
          {data.chakras.map(item => (
            <div
              key={item.id}
              style={{ backgroundColor: `${item.color}` }}
              className="ChakraOrb"
              value={item.id}
              name={item.nameEnglish}
              onClick={handleClick}
            >
              {item.note}
            </div>
          ))}
        </div>
      </div>
      <div className="Information-Container">
        <ChakraInfo data={chakra} />
      </div>
    </div>
  );
}

export default App;
