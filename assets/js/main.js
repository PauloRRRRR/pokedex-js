const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const detailsPokemonList = document.getElementById('detailsPokemonList');
const modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];


const limit = 10;
let offset = 0;
const maxRecords = 15;

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
                    <div class='secondDetail' style="display: none;">
                        <ol class="abilities">
                            Abilities: ${pokemon.abilities.map((ability) => `<li class="ability ${ability}" >${ability}</li>`).join('')}
                        </ol>
                        <span class="weight">Weight: ${pokemon.weight}</span>
                        <span class="height">Height: ${pokemon.height}</span>
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

const detailsLista = document.getElementById('detailsPokemonList');

console.log(detailsLista)

var pokemonSelecionado;
var clone;

var secondDetail = document.querySelector("li > div.secondDetail")

document.querySelector(".pokemons").addEventListener('click', function(e) {
    console.log(e.target.parentElement.parentElement)
    // detailsPokemonList.innerHTML += e.target.parentElement.parentElement;

    pokemonSelecionado = e.target.parentElement.parentElement;

    clone = pokemonSelecionado.cloneNode(true);

    
    detailsLista.appendChild(clone);
    detailsLista.style.display = "block";
    clone.querySelector("li > div.secondDetail").style.display = "block";
    modal.style.display = "block";
    
    })

span.onclick = function() {
        modal.style.display = "none";
        detailsLista.removeChild(clone);
        console.log(clone);
    }    


