import React from 'react'
import ReactDOM from 'react-dom/client'
import { TicTacToe } from './pages/TicTacToe/index.jsx'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TicTacToe />
  </React.StrictMode>
)
