/*
    pokemonRoutes.js - Defines the routes/endpoints for handling Pokemon-related requests.
    This file sets up the Express router and defines the route for fetching Pokemon data by name.
    Matches the endpoint defined in the frontend for fetching Pokemon data, allowing the frontend to request data from the backend.

*/

import express from 'express'
import { getPokemon, getPokemonOptions } from '../controllers/pokemonController.js'

const router = express.Router()

router.get('/options', getPokemonOptions)

router.get('/:name', getPokemon)

export default router