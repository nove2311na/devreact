import React, {useState} from "react";
import Board from "./Board";
import "./GameStyles.scss";
import { CalculateWinner } from "../helper";

function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = CalculateWinner(board);
  console.log(board);
  const handleClick = (index) => {
    // reference thay đổi ảnh hưởng mảng gốc --> phải copy mảng gốc
    const boardCopy = [...board];
    if (
    // nếu đã có người thắng hoặc ô đã được đánh thì không cho đánh nữa
    winner || boardCopy[index]) return;
    // kiểm tra xIsNext để đánh X hoặc O
    boardCopy[index] = xIsNext ? "X" : "O";
    // update lại board
    setBoard(boardCopy);
    // đổi lượt người chơi, setXIsNext(!xIsNext) ngược lại với xIsNext
    setXIsNext(!xIsNext); 
    
  };
  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
    </div>
  );
}

export default Game;

