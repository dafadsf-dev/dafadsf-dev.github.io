const h1 = document.querySelector("h1")

const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?
 if (isMorning) 
  { h1.textContent="Good Morning!" } 
 else if (isAfternoon) {
  h1.textContent="Good Afternoon!" }
 else {
  h1.textContent="Good Evening!" }
  localStorage.setItem("It's a secret to everybody.", "Here, take this!");

   const getJsonFrom = async url => {
  const response = await fetch(url)
  return response.json()
}
  const getPokemonStats = async pokemon => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const json = await getJsonFrom(url)
    const { id, name, height, weight } = json
    return { id, name, height, weight }
}

//const charizard = await getPokemonStats(charizard)
const charizard = await getPokemonStats(6) // the api also lets us use the id
console.log(charizard)
const getRandomPokemon = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)
  const response = await fetch(url)
  return response.json()
}

const renderPokemon = async () => {
  const pokemon = await getRandomPokemon()
  const { name, height, weight, sprites } = pokemon

  const img = document.createElement('img')
  img.src = sprites.front_default   
  img.alt = name                    

  const parentElement = document.querySelector("#wrapper")
  parentElement.append(img)
}
renderPokemon()