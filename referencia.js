//url para requisicao
const urlPokemon = id => `https://pokeapi.co/api/v2/pokemon/${id}`

const buscaPokemon = () => {

const pokemonsPromises = []
for (let i = 1; i <= 150; i++) {
// fetch faz requisicao e retorna promise
// cada promesa é armazenada no array
pokemonsPromises.push(fetch(urlPokemon(i))
.then((response) => {
return response.json()
})
)
}

Promise.all(pokemonsPromises)
.then(listaPokemons => {
const htmlLista = listaPokemons.reduce((acumulador, pokemon) => {
acumulador +=
`<li class="card ${pokemon.types[0]}">
<img class="card-image" alt="${pokemon.name}" src="${pokemon.sprites.front_default}">
<h2 class="card-title">${pokemon.id}. ${pokemon.name} </h2>
<p class="card-subtitle"> ${pokemon.types.map( (tipos) => tipos.type.name).join(" | ")}</p>
</li>`
return acumulador
}, '')

const ul = document.querySelector('[data-js="pokedex"]')
ul.innerHTML = htmlLista
})

}

buscaPokemon()