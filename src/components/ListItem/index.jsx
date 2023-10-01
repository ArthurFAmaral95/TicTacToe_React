import './styles.css'

export function ListItem({ playN, move }, key) {
  return (
    <>
      <li key={key}>
        <button onClick={() => move(playN)}>
          {playN === 0 ? 'Go to game start' : 'Go to play #' + playN}
        </button>
      </li>
    </>
  )
}
