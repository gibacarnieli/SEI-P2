import { Link, useLoaderData } from "react-router-dom"

export default function Chars(){
  const char = useLoaderData()
  console.log(char)
  const {name, image, episode} = char

  return (
    <>
      <h1>Characters</h1>
      <div className="container">
        <div className="char">
          <h2>{name}</h2>
          <img src={image} alt={`Image of ${name}`} />
          <h3>Episode List</h3>
          {episode.map((ep, i) => {
            const num = ep.split('/')
            return (
              <Link key={i}>Episode {num[num.length-1]}</Link>
            )
          })}
        </div>
      </div>
    </>
  )
}