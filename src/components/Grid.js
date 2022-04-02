import React from "react";
import "../style.scss";
function Grid(props) {
  const data = props.data;
  let i = props.i;
  const matchStyle = {
    2: "#eee4da",
    4: "#ede0c8",
    8: "#f2b179",
    16: "#f59563",
    32: "#f67c5f",
    64: "#f65e3b",
    128: "#edcf72",
    256: "#edcc61",
    512: "#edc850",
    1024: "#edc53f",
    2048: "#edc22e",
  };
  function matchBackground(n) {
    return matchStyle[n];
  }
  return (
    <div className="row">
      {data[i].map((item, index) => (
        <div
          key={index}
          className="grid"
          style={{ backgroundColor: matchBackground(item) }}
        >
          <span style={{ color: item>7?"#faf8ef":"" }}>{item ? item : ""}</span>
        </div>
      ))}
    </div>
  );
}
export default Grid;
