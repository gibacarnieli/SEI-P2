import { Link, useLoaderData } from "react-router-dom"

export default function Chars(){
  const chars = useLoaderData()
  return (
    <>
      <h1>Characters</h1>
      <div className="sections">
        {chars && chars.map(page => {
          const { results } = page
          return results.map(char => {
            const {id, name, image} = char
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