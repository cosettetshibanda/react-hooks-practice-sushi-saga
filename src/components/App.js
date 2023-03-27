import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [money, setMoney] = useState(100)

  function eatSushi(sushi){
    if(sushi.price <= money) {
      setSushis(sushis.map(s => sushi.id === s.id ? {...s, eaten: true} : s))
      setMoney(money - sushi.price)
    }
  }

  useEffect(() => {
   fetch(API)
   .then(res => res.json())
   .then(setSushis)
  }, [])



  return (
    <div className="app">
      <SushiContainer eatSushi={eatSushi} sushis={sushis} />
      <Table money={money} plates={(sushis.filter(s=>s.eaten))} />
    </div>
  );
}

export default App;
