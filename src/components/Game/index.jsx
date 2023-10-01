import { Header } from '../Header'
import { List } from '../List'
import { Board } from '../Board'

import { useState } from 'react'

export function Game() {
  const [xIsNext, setXIsNext] = useState(true)
  const [history, setHistory] = useState([Array(9).fill(null)])
  const currentSquares = history[history.length - 1]

  function handlePlay(nextSquares) {
    setHistory(prevState => [...prevState, nextSquares])
    setXIsNext(!xIsNext)
  }

  function calculateWinner(array) {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i]
      if (array[a] && array[a] === array[b] && array[a] === array[c]) {
        return array[a]
      }
    }
    return null
  }

  return (
    <>
      <div className="game">
        <Header
          value={xIsNext ? '❌' : '⭕️'}
          winner={calculateWinner(currentSquares)}
        />
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          calculateWinner={calculateWinner}
        />
      </div>
      <div className="history">
        <List history={history} />
      </div>
    </>
  )
}
