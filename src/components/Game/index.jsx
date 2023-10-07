import { Header } from '../Header'
import { List } from '../List'
import { Board } from '../Board'

import { useState } from 'react'

export function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const [descending, setDescending] = useState(false)
  const xIsNext = currentMove % 2 === 0
  const currentSquares = history[currentMove]

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove)
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
        const result = [array[a], winningCombinations[i]]
        return result
      }
    }
    return null
  }

  function toggleOrder() {
    setDescending(!descending)
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
          winnerSquares={calculateWinner(currentSquares)}
        />
      </div>
      <div className="history">
        <List
          history={history}
          handleTime={jumpTo}
          play={history.length}
          toggleOrder={toggleOrder}
          descending={descending}
          winner={calculateWinner(currentSquares)}
        />
      </div>
    </>
  )
}
