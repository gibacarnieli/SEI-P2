import { Link, useLoaderData } from "react-router-dom"

export default function SingleChar(){
  const char = useLoaderData()
  const {name, image, episode} = char

  return (
    <>
      <h1>Characters</h1>
      <div className="container">
        <div className="char">
          <h2>{name}</h2>
          <img src={image} alt={`Image of ${name}`} />
          <h3>Episode List</h3>
          <div className="eps">
            {episode.map((ep, i) => {
              const num = ep.split('/')
              return (
                <Link to={`/episode/${num[num.length-1]}`} key={i}>Episode {num[num.length-1]}</Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}