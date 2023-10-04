import './styles.css'

export function ToggleBtn({ onClick }) {
  return (
    <button className="toggle" onClick={onClick}>
      Sort order
    </button>
  )
}
