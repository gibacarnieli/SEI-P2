import { Link, useLoaderData } from "react-router-dom"

export default function SingleChar(){
  // We get a single character from the loader based on its id, then destructure it
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
            {/* Episode consists of an array of strings each referring to the episode */}
            {episode.map((ep, i) => {
              // The episode string is a url with the last section of it containing the episode's unique id
              // so we split it and the use num[num.length-1] to actually target the id
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