import { Link } from "react-router-dom"


export default function Nav(){
  return (
    <header>
      <nav>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" alt="" />
        <Link to='/'>Home</Link>
        <Link to='/characters'>All Characters</Link>
      </nav>
    </header>
  )
}