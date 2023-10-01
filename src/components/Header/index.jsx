import './styles.css'

export function Header({ value, winner }) {
  return (
    <>
      <p>
        {winner ? 'Winner is: ' : 'Next player: '}
        <span>{winner ? winner : value}</span>
      </p>
    </>
  )
}
