import './styles.css';

import {Square} from '../Square'

import { useState } from 'react'

export function Board(){

  //❌ ⭕️
  const [xIsNext, setXIsNext] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))

  function handleClick(i){
    if(squares[i]){
      return
    }

    const nextSquares = squares.slice()
    if(xIsNext){
      nextSquares[i] = '❌'
    } else{
      nextSquares[i] = '⭕️'
    }
    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }

  return(
    <div className="board" >
      <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
      <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
      <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
      <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
      <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
      <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
      <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
      <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
      <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
    </div>
  )

  // function Square({value, onSquareClick}){
  //   return(
  //     <div 
  //       className="square"
  //       onClick={onSquareClick} 
  //     >
  //       {value}
  //     </div>
  //   )
  // }

}