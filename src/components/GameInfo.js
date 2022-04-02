import React, { Fragment, useContext } from "react";
import { DataContext,ScoreContext,FailContext } from "../App";
import  restart  from "../logic/restart";
import "../style.scss";
function GameInfo() {
  const [,setData] = useContext(DataContext)
  const [score,setScore] = useContext(ScoreContext)
  const [,setFail] = useContext(FailContext);
  let best = localStorage.getItem('best')
  return (
    <Fragment>
      <div className="title">
        <h1>2048</h1>
        <div className="scoreWrapper">
          <div className="currentScore">{score}</div>
          <div className="bestScore">{best}</div>
        </div>
      </div>
      <div className="intro">
        <p className="sayHi">Let's play the game,enjoy!</p>
        <a href=" " className="restart" onClick={()=>restart(setData,setScore,setFail)}>
          RESTART
        </a>
      </div>
    </Fragment>
  );
}
export default GameInfo;
