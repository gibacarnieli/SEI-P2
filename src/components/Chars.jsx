import { Link } from "react-router-dom"
import { useLoaderData } from "react-router-dom"

export default function Chars(){
  const chars = useLoaderData()
  return (
    <>
      <h1>Characters</h1>
      <main>
      {chars.map(page => {
        console.log(page)
        return page.results.map(char => {
          const {id, name, image, episode} = char
          return (
            <Link key={id} to={`/characters/${id}`}>
              <section>
                <h2>{name}</h2>
                <img src={image} alt="Character Image" />
                {episode.map((ep, i) => {
                  const num = ep.split('/')
                  return (
                    <p key={i}>Episode {num[num.length-1]}</p>
                  )
                })}
              </section>
            </Link>
          )
        })
      })
    }
      </main>
    </>
)
}