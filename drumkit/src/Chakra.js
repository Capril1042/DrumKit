import React, { useState }from 'react';

import './Chakra.css';
import ChakraData from'./ChakraData';
import ChakraInfo from './ChakraInfo';


function Chakra() {
  const [data] = useState({chakras: ChakraData.reverse()});
  const [chakra, setChakra] = useState(null);

  return   ( 
    <div>
  {data.chakras.map(item => (
    <div key={item.id} 
    style={{backgroundColor: `${item.color}`}} 
    className="ChakraOrb"
    onClick={()=> setChakra(ChakraData[ChakraData.reverse().findIndex(obj=>obj.id === item.id)])}
    >
      {item.note}
    </div>
  ))}
    
</div>
);
}

export default Chakra;