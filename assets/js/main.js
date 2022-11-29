const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const pokemonDetail = document.getElementById('details')

const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li id="${pokemon.number}" class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})



function convertPokemonToHtml(pokemon) {
    return  `
     
        <section class="detailscover">
            <h1>${pokemon.name}</h1>
            <img src="${pokemon.photo}" alt="${pokemon.name}" />

            
        </section>

        <section class="abilities">
            <h2>Abilities</h2>
            <div>Hp<span>${pokemon.hp}</span></div>
            <div>Attack<span>${pokemon.attack}</span></div>
            <div>Defense<span>${pokemon.defense}</span></div>
            <div>Special Attack<span>${pokemon.specialAttack}</span></div>
            <div>Special Defense<span>${pokemon.specialDefense}</span></div>
            <div>Speed<span>${pokemon.speed}</span></div>
        </section>
        
    `
}

let dt = 0


function loadPokemonDetails(convertPokemonToHtml) {
    dt.addEventListener('click', () => {
        let dt = document.getElementById(pokemon.number)
        console.log(dt)
    }) .then((pokemons = []) => {
        const detailHtml = pokemons.map(convertPokemonToHtml)
        pokemonList.innerHTML = detailHtml
    })
}