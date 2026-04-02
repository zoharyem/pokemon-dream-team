/*
    pokemonService.js - Contains the business logic for fetching Pokemon data from the PokeAPI.
    How do we get the data?
*/

export const fetchPokemon = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await response.json()

    return {
        name: data.name,
        image: data.sprites.front_default,
        types: data.types.map(t => t.type.name),
        stats: data.stats.map(s => ({
            name: s.stat.name,
            value: s.base_stat
        }))
    }
}