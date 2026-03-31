function PokemonTile() {
    return (
        <div className="pokemon-tile">
            <h3>Pokemon Name</h3>
            <p>Pokemon Description</p>
        </div>
    );
}

function PokemonMiniTile() {
    return (
        <div className="pokemon-mini-tile">
            <h4>Pokemon Name</h4>
            <p>Pokemon Description</p>
        </div>
    );
}

export default {PokemonMiniTile, PokemonTile};