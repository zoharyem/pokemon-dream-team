/*
The component used to display and select from different pokemon options for your team.
*/
import { useEffect, useState } from "react";
import { fetchPokemonOptions } from "../api/api";
import pokemonMinTile from "./pokemontiles";

export default function Selector({ onSelect }) {
    // call options data
    const [pokemonOptions, setPokemonOptions] = useState([]); // TODO: useState to store options data

    useEffect(() => {
        async function getOptions() { // defines a function to fetch pokemon options from the api
            const options = await fetchPokemonOptions();
            setPokemonOptions(options.data);    // which then sets the pokemon options
        }
        getOptions(); // calls the defines function
    }, []); // only once when the component is first rendered.

    return (
        <div className="selector"> 
            This is your pokemon selector!

            <div className="selector-grid">
                {pokemonOptions.map((option) => (
                    <pokemonMinTile
                    pokemon={option}
                    onselect={() => onSelect(option)}>
                    </pokemonMinTile>
                ))}
            </div>
        </div>
    )
    // on click of a tile, add to team and remove from options
}