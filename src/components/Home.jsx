import { useState } from "react"
import { useLoaderData, Link } from "react-router-dom"

export default function Home(){
  const [ search, setSearch] = useState('')
  const data = useLoaderData()
  // pattern gets updated each time the user writes on the
  const pattern = new RegExp(search, 'i')


  return (
    <>
    <h1>Search for Character</h1>
    <div className="formCont">
      <input type="text" name="charName" placeholder="Search Your Favourite Character" value={search} onChange={(e) => setSearch(e.target.value)}/>
    </div>
    <div className="sections">
      {/* Data is an array of 42 pages containing characters each so we map through it */}
    {data.map(p => {
      // we filter each page for the characters whose name match the search criteria and save them in a single array
      const chars = p.results.filter(r => pattern.test(r.name))
      // we map the array of matching characters to create each individual card
      return chars.map(c => {
        const {id, name, image} = c
        return (
          <Link key={id} to={`/characters/${id}`}>
            <section>
              <h2>{name}</h2>
              <img className="charImg" src={image} alt="Character Image" />
            </section>
          </Link>
        )
      })
    })}
    </div>
    </>
  )
}