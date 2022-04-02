import {resetDaraMatrix} from "./reset";
export default function restart(setData,setScore,setFail){
  setData(resetDaraMatrix())
  setScore(0)
  setFail(false)
}