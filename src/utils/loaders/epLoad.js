import { getSingleChar } from "./charLoad"

export async function getEpisode(id){
  try {
    const chars = []
    const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
    const data = await res.json()
    // we retrive the actual data of all characters referenced in the episode response, then save it to chars[]
    data.characters.map(e => {
      const search = e.split('/')
      chars.push(getSingleChar(search[search.length - 1]))
    })
    //force chars to be resolved before exiting function
    const resolved = await Promise.all(chars)
    // return episode data + character data
    return [data, resolved]
  } catch (error) {
    console.log(error)
  }
}