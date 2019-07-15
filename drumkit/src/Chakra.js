import React, { useState }from 'react';

import './Chakra.css';
import ChakraData from'./ChakraData';
import ChakraInfo from './ChakraInfo';

function Chakra() {
  const [data] = useState({chakras: ChakraData.reverse()});
  
 

  return   ( 
  <div>
  {data.chakras.map(item => (
    <div key={item.id} 
    style={{backgroundColor: `${item.color}`}} 
    className="ChakraOrb"
    >
      {item.note}
    </div>
  ))}
</div>
);
}

export default Chakra;