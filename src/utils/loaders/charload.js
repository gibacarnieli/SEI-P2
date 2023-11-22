

export async function getAllChars() {
  const arr = []
  // fetch ALL characters from ALL pages and add them to the array
  for (let i = 1; i <= 42; i++){
    arr.push(getInfo(`?page=${i}`))
  }
  // chat Gpt helped here
  return Promise.all(arr)
}

export async function getSingleChar(charId){
  return getInfo(charId)
}

async function getInfo(extra){
  // all your fetching needs in one place!
  const res = await fetch(`https://rickandmortyapi.com/api/character/${extra}`)
  return res.json()
}