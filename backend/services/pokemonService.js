/*
    pokemonService.js - Contains the business logic for fetching Pokemon data from the PokeAPI.
    How do we get the data?
*/

// A function that fetches a pokemon by name from the PokeAPI.
export const fetchPokemon = async (name) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)

        if (!response.ok)   {
            throw new Error(`Failed to fetch pokemon with name: ${name}`);
        }

        const data = await response.json()

        return {
            name: data.name,
            image: data.sprites.front_default//,
            // types: data.types.map(t => t.type.name),
            // stats: data.stats.map(s => ({
            //     name: s.stat.name,
            //     value: s.base_stat
            // }))
        }
    } catch (error) {
        console.error(`Error fetching Pokemon ${name}:`, error)
        throw error
    }
}

// A function that fetches a list of the user's pokemon options from the PokeAPI.
// Only name and image are stored for efficency.
export const fetchPokemonOptions = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    if (!response.ok)   {
        throw new Error(`Pokemon Service failed to fetch pokemon options`);
    }
    const data = await response.json()

    return {
        data: data.results.map(p => ({
            name: p.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.url.split('/').slice(-2, -1)[0]}.png`
        }))
    }
}