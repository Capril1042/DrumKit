import React, { useState, useEffect } from "react";
import "./ChakraInfo.css";
import "./Chakra.css";

function ChakraInfo(props) {
  // const [chakra]= useState(props.chakra);
  // useEffect(()=> console.log(chakra));
  const information =
    props.data === null
      ? console.log("undefined")
      : console.log(props.data.chakra.nameEnglish);
  return (
    <div className="ChakraInfo">
      Information
      {information}
    </div>
  );
}

export default ChakraInfo;
