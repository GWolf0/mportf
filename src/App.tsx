import { useMemo } from "react";
import HomePage from "./pages/HomePage";
import { PortfolioDataDef } from "./types";
import data from "./data";

function App(){
  const _data:PortfolioDataDef=useMemo(()=>data,[]);

  return (
    <HomePage data={_data} />
  )
}

export default App;
