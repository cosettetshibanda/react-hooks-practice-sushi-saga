import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi.js"

function SushiContainer({sushis, eatSushi}) {
  const [sushiIndex, setSushiIndex] = useState(0)

  function handleClick(){
    setSushiIndex(sushiIndex + 4)
  }

  return (
    <div className="belt">
      {sushis.slice(sushiIndex, sushiIndex + 4).map(sushi => <Sushi eatSushi={eatSushi} sushi={sushi} key={sushi.id}/>)} 
      <MoreButton handleClick={handleClick} />
    </div>
  );
}

export default SushiContainer;
