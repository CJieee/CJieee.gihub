import React, { useContext, useEffect} from "react";
import Grid from "./Grid";
import {DataContext, FailContext, ScoreContext} from "../App";
import {rowMove,columnMove} from "../logic/move";
import restart  from "../logic/restart";
import c from "classnames";
function GameBody() {
  const [data, setData] = useContext(DataContext)
  const [score,setScore] = useContext(ScoreContext)
  const [fail, setFail] = useContext(FailContext);
  let startx,starty,endx,endy
  let document_width = window.screen.availWidth
  //移动端监听滑动事件
  useEffect(()=>{
    document.addEventListener('touchstart',function (e) {
      startx = e.touches[0].pageX;
      starty = e.touches[0].pageY;
    });
    document.addEventListener('touchend',function (e) {
      endx = e.changedTouches[0].pageX;
      endy = e.changedTouches[0].pageY;
      let x = endx - startx;
      let y = endy - starty;
      if(Math.abs(x) < 0.3*document_width && Math.abs(y) < 0.3*document_width){
          return;
      }
      if(Math.abs(x) > Math.abs(y)){
        if(x > 0){
          rowMove(0,data,score,setScore,setFail,setData);//right
        } else {
          rowMove(1,data,score,setScore,setFail,setData);//left
        }
      }else if(Math.abs(x) < Math.abs(y)) {
        if (y < 0){
          columnMove(1,data,score,setScore,setFail,setData)//up
        } else { 
          columnMove(0,data,score,setScore,setFail,setData)//down
        }
      }
    })
  })
  // pc端监听键盘事件
  useEffect(() => {
    function bindKeyEvent(e) {
      let keyCode = e.keyCode;
      switch (keyCode) {
        case 37:
        case 65:
          rowMove(1,data,score,setScore,setFail,setData);//left
          break;
        case 38:
        case 87:
          columnMove(1,data,score,setScore,setFail,setData);//up
          break;
        case 39:
        case 68:
          rowMove(0,data,score,setScore,setFail,setData);//right
          break;
        case 40:
        case 83:
          columnMove(0,data,score,setScore,setFail,setData);//down
          break;
        case 81:
          restart(setData,setScore,setFail);
          break;
        default:
      }
    }
    window.addEventListener("keyup", bindKeyEvent);
    return () => {
      window.removeEventListener("keyup", bindKeyEvent);
    };
  });
  return (
    <div className="canvasWrapper">
      <div className="canvas"  >
        <div className='over' id={fail}>
            <p>Game over!</p>
            <a href=" " onClick={()=>restart(setData,setScore,setFail)}>try again</a>
           </div>
        <div className={c(fail,"over")} >
          <p>Success!</p>
          <a href=" " onClick={()=>restart(setData,setScore,setFail)}>Keep going</a>
        </div>
          <Grid i={0} data={data} />
          <Grid i={1} data={data} />
          <Grid i={2} data={data} />
          <Grid i={3} data={data} />
        
      </div>
    </div>
  );
}

export default GameBody;
