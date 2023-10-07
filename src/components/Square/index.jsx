import './styles.css'

export function Square({ value, onSquareClick, className }) {
  return (
    <div className={`square ${className}`} onClick={onSquareClick}>
      <div>{value}</div>
    </div>
  )
}
