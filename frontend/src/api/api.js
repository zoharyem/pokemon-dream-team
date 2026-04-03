export const fetchPokemon = async (name) => {
    const response = await fetch(`/api/pokemon/${name}`);

    if (!response.ok)   {
        throw new Error(`Failed to fetch pokemon with name: ${name}`);
    }
    const data = await response.json();

    return data
}

export const fetchPokemonOptions = async () => {
    const response = await fetch(`/api/pokemon/options`);

    if (!response.ok)   {
        throw new Error(`Failed to fetch pokemon options`);
    }

    const data = await response.json();
    return data
}