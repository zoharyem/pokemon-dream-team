/*
    How is the HTTP request handled?
     - The frontend makes a request to the backend endpoint defined in pokemonRoutes.js (e.g., /api/pokemon/:name).
     - The router directs this request to the getPokemon function in this controller.
     - The getPokemon function uses the fetchPokemon function from pokemonService.js to retrieve the relevant data from the PokeAPI.
     - Finally, it sends the fetched data back to the client as a JSON response.
*/
import express from 'express'
import pokemonRoutes from './routes/pokemonRoutes.js'

const app = express() // import express and create an instance.
const PORT = 3000 // Define the port number for the server to listen on.

// Middleware to parse incoming JSON requests. Works by intercepting requests and parsing the JSON body 
// into a JavaScript object, which is then accessible in the request handlers via 
// req.body. This allows the server to easily handle and process JSON data sent from the client.
app.use(express.json())

app.use('/api/pokemon', pokemonRoutes) // For any request to /api/pokemon, use the pokemonRoutes defined in pokemonRoutes.js.

app.listen(PORT, () => {    // Start the server and listen on the defined port. The callback function is executed once the server is up and running, logging a message to the console.
    console.log(`Server running on port ${PORT}`)
})