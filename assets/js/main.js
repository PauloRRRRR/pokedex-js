const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

fetch(url)
    .then((response) => {
        return response.json()
    })
    then((responseBody) => {
        console.log(responseBody)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log('Requisição concluída')
    })