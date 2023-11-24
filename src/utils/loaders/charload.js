

export async function getAllChars() {
  try {
    const arr = []
    // fetch ALL characters from ALL pages and add them to the array
    for (let i = 1; i <= 42; i++){
      arr.push(getInfo(`?page=${i}`))
    }
    // chat Gpt helped here
    // Promise.all(arr) this waits for all promises inside to get resolved before returning as a single promise
    return Promise.all(arr)
  } catch (error) {
    console.log(error)
  }
}

export async function getSingleChar(charId){
  return getInfo(charId)
}

async function getInfo(extra){
  try {
    // all your fetching needs in one place!
    const res = await fetch(`https://rickandmortyapi.com/api/character/${extra}`)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}