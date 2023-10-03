import './styles.css'

export function ListItem({ playN, move }) {
  return (
    <>
      <li>
        <button onClick={() => move(playN)}>
          {playN === 0 ? 'Go to game start' : 'Go to play #' + playN}
        </button>
      </li>
    </>
  )
}
