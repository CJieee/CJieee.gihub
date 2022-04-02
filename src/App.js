import React, { useState } from "react";
import GameInfo from "./components/GameInfo";
import GameBody from "./components/GameBody";
import "./style.scss";
import { resetDaraMatrix } from "./logic/reset";

localStorage.setItem('best', localStorage.best?localStorage.best:0 )
export const BestContext = React.createContext()
export const DataContext = React.createContext();
export const ScoreContext = React.createContext();
export const FailContext = React.createContext();
export function App() {
  const [data, setData] = useState(resetDaraMatrix());
  const [score, setScore] = useState(0);
  const [fail, setFail] = useState('false');
  const [best, setBest] = useState(0);
  return (
    <div className="main">
      <DataContext.Provider value={[data, setData]}>
        <ScoreContext.Provider value={[score, setScore]}>
          <FailContext.Provider value={[fail, setFail]}>
          <BestContext.Provider value={[best, setBest]}>
            <GameInfo />
            <GameBody />
            </BestContext.Provider>
          </FailContext.Provider>
        </ScoreContext.Provider>
      </DataContext.Provider>
    </div>
  );
}
