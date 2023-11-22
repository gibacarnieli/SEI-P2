import { Link } from "react-router-dom"


export default function Nav(){
  return (
    <header>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/characters'>All Characters</Link>
      </nav>
    </header>
  )
}