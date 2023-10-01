import './styles.css'

export function ListItem({ state, playN }, key) {
  return (
    <>
      <li key={key}>
        <button>
          {playN === 0 ? 'Go to game start' : 'Go to play #' + playN}
        </button>
      </li>
    </>
  )
}
