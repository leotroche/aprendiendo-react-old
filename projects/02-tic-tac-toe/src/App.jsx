import { useState } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'

import { TURNS } from './constants'
import { checkEndGame, checkWinner } from './logic/board'
import { Square, WinnerModal } from './components'

import conffeti from 'canvas-confetti'

function App() {
  const [board, setBoard] = useLocalStorage('board', Array(9).fill(null))
  const [turn, setTurn] = useLocalStorage('turn', TURNS.X)
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (board[index] || winner) return

    // Set new board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard) // set state and save to localStorage

    // Set new turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn) // set state and save to localStorage

    // Check winner
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      conffeti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    } // Empate
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    // Reset game storage
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  return (
    <main className='board'>
      <h1>TIC TAC TOE</h1>
      <button onClick={resetGame}>RESET GAME</button>

      <section className='game'>
        {board.map((_, index) => (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {board[index]}
          </Square>
        ))}
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
