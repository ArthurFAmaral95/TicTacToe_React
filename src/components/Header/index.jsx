import './styles.css'

export function Header({ value, winner }) {
  return (
    <>
      <p>
        {winner ? 'Winner is: ' : 'Next player: '}
        <span>{winner ? winner[0] : value}</span>
      </p>
    </>
  )
}
