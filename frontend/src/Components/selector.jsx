/*
The component used to display and select from different pokemon options for your team.
*/

import { PokemonOptionTile } from "./pokemontiles";

export default function Selector({ onClick, pokemonOptions }) {

    return (
        <div className="selector"> 
            <div>This is your pokemon selector!</div>
            <div className="selector-grid">
                {pokemonOptions.map((option) => (
                    <PokemonOptionTile
                    key={option.name}
                    pokemon={option}
                    onClick={onClick}>
                    </PokemonOptionTile>
                ))}
            </div>
        </div>
    )
}