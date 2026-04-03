function PokemonTile({ pokemon }) {
    if (!pokemon) {
        return (
            <div className="pokemon-tile empty-tile">
                <h3>Empty Slot</h3> 
            </div> //TODO add pokemon-tile empty-tile in css
        );
    }
    return (
        <div className="pokemon-tile">
            <h3>Pokemon {pokemon.name}</h3>
        </div>
    );
}

function PokemonOptionTile({ pokemon, onSelect }) {
    return (
        <div className="pokemon-option-tile" onClick={() => onSelect(pokemon)}>
            <h4>Pokemon Name: {pokemon.name}</h4>
        </div>
    );
}

export default { PokemonMiniTile: PokemonOptionTile, PokemonTile };