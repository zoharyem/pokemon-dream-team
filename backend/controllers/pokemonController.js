/*
    pokemonController.js - Contains the controller function for handling Pokemon-related requests.
    This file defines the getPokemon function, which is responsible for fetching Pokemon data based on the name provided in the request parameters.
    The function interacts with the PokeAPI to retrieve the relevant data and sends it back to the client as a JSON response.
*/
import { fetchPokemon, fetchPokemonOptions } from '../services/pokemonService.js'

export const getPokemon = async (req, res) => {
    console.log('getPokemon-name called in controller')
    try {
        const { name } = req.params
        const pokemon = await fetchPokemon(name)

        res.json(pokemon)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch pokemon' })
    }
}

export const getPokemonOptions = async (req, res) => {
    try {
        const options = await fetchPokemonOptions()
        res.json(options)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch pokemon options' })
    }
}