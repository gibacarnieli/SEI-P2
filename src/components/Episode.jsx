import { Link, useLoaderData } from "react-router-dom"

export default function Episode(){
  // episode is as array with data from the episode on the first position and an array of the data from the characters in the episode on the other
  const ep = useLoaderData()
  const {name, episode} = ep[0]
  return (
    <>
      <h1>{episode} {name}</h1>
        <h2 className="cast">Cast</h2>
        <div className="sections">
        {console.log(ep[1])}
        {ep[1].map(e => {
          const {id, name: charName, image} = e
          return (
            <section key={id}>
              <Link to={`/characters/${id}`}>
                <h3>{charName}</h3>
                <img src={image} alt={`Image of ${charName}`} />
              </Link>
            </section>
            )
        })}
        </div>
    </>
  )
}