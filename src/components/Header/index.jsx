import './styles.css'

export function Header({value}){
  return(
    <>
    <p>Next player: <span>{value}</span></p>
    </>
  )
}