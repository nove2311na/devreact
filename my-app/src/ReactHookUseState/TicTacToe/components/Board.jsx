// Kỹ thuật dùng Array(9).fill(0) để tạo ra mảng gồm 9 phần tử có giá trị là 0

import React from "react";
import Cell from "./Cell";
// import { CalculateWinner } from "../helper";


function Board(props) {
  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cell 
        key={index} 
        value={item} 
        onClick={()=>props.onClick(index)}
        />
      ))} 
    </div>
  )
}

export default Board;
