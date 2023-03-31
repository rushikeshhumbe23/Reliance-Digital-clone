import React from "react";
import style from "../styles/GridComp.module.css";

function GridCopm({ Data, text }) {
  return (
    <div style={{ padding: "15px" }}>
      <p className={style.description_para}>{text}</p>
      <div className={style.grid_cont}>
        {Data.map((ele, i) => (
          <div key={i + 1}>
            <img width="100%" src={ele} alt={`grid-element${i + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GridCopm;
