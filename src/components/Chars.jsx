import { Link, useLoaderData } from "react-router-dom"

export default function Chars(){
  /* Data is an array of 42 pages containing characters each */
  const chars = useLoaderData()
  return (
    <>
      <h1>Characters</h1>
      <div className="sections">
        {/* We map through the data */}
        {chars && chars.map(page => {
          const { results } = page
          // We map each character
          return results.map(char => {
            const {id, name, image} = char
            // And we render the component
            return (
              <Link key={id} to={`/characters/${id}`}>
                <section>
                  <h2>{name}</h2>
                  <img className="charImg" src={image} alt="Character Image" />
                </section>
              </Link>
            )
          })
        })
        }
      </div>
    </>
  )
}