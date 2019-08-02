import React from "react";
import "./ChakraInfo.css";
import "./Chakra.css";

function ChakraInfo(props) {

  const play = (url) => {
    let audio = new Audio(url);
    audio.play();
    console.log(`${url} is playing`)
    console.log('ChakraInfo')
  }

  const information =
    props.data === null
      ? <div>Information</div>
      :
      <div style={{ color: `${props.data.chakra.color}`}}>
        <h1>{props.data.chakra.nameSanskrit}</h1>
        <h2>{props.data.chakra.nameEnglish}</h2>
        <p>description</p>
        <button onClick={play(props.data.chakra.audio)}>play Singing bowl</button>
      </div>;
  return (
    <div className="ChakraInfo">
      {information}
    </div>
  );
}

export default ChakraInfo;
