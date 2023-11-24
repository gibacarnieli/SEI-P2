import { Link, useLoaderData } from "react-router-dom"

export default function Episode(){
  // episode is an array with data from the episode on the first position and an array of the data from the characters in the episode on the other
  const ep = useLoaderData()
  // ep[0] is the episode data itself
  const {name, episode} = ep[0]
  return (
    <>
      <h1>{episode} {name}</h1>
        <h2 className="cast">Cast</h2>
        <div className="episodeCont">
          {/* ep[1] is the data of the characters IN the episode */}
        {ep[1].map(e => {
          // destructuring avoiding variable 'name' to be repeated
          const {id, name: charName, image} = e
          return (
            // rendering of the elements
            <section key={id}>
              <Link to={`/characters/${id}`}>
                <h3>{charName}</h3>
                <img className="charImg" src={image} alt={`Image of ${charName}`} />
              </Link>
            </section>
            )
        })}
        </div>
    </>
  )
}