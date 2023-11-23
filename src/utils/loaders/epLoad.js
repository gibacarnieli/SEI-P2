import { getSingleChar } from "./charLoad"

export async function getEpisode(id){
  try {
    // all your fetching needs in one place!
    const chars = []
    const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
    const data = await res.json()
    data.characters.map(e => {
      const search = e.split('/')
      chars.push(getSingleChar(search[search.length - 1]))
    })
    const resolved = await Promise.all(chars)
    return [data, resolved]
  } catch (error) {
    console.log(error)
  }
}