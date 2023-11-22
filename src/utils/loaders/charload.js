

export async function getAllChars() {
  const arr = []
  // fetch ALL characters from ALL pages and add them to the array
  for (let i = 1; i <= 42; i++){
    const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${i}`)
    arr.push(res.json())
  }
  //console.log(arr)
  return arr
}