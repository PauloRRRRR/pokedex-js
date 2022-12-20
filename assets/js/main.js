const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');

const limit = 151;
let offset = 0;
const maxRecords = 150;

// mapeando cada item e unindo ao HTML com join

function loadPokemonItems(offset, limit){    
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map((pokemon) => `
                <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}" >${type}</li>`).join('')}
                        </ol>
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                </li>
                
            `).join('')

    })
}

loadPokemonItems(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit;

    const qtRecord = offset + limit;

    if(qtRecord >= maxRecords){
        const newLimit = qtRecord - maxRecords
        loadPokemonItems(offset, limit)

        return
    } else{
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }

    loadPokemonItems(offset, limit)
})

document.querySelector(".pokemons").addEventListener('click', function(e) {
        console.log(e.target.parentElement.parentElement);
    })
    