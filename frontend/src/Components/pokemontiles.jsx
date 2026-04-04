import { Tooltip } from 'react-tooltip';

export function PokemonTile({ pokemon, onClick }) {
    if (!pokemon) {
        return (
            <div className='pokemon-tile'>
                <img src="/poke-ball.png" alt="Empty slot" />
            </div>
        );
    }
    return (
        <div className="pokemon-tile" onClick={() => onClick(pokemon)}>
            <div className='pokemon-tile-image'>
                <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <h3>Pokemon {pokemon.name}</h3>
        </div>
    );
}

export function PokemonOptionTile({ pokemon, onClick }) {
    return (
        <div 
            className="pokemon-option-tile" 
            onClick={() => onClick(pokemon)}
            data-tooltip-id={`tooltip-${pokemon.name}`}
            data-tooltip-content={pokemon.name}>
            <Tooltip id={`tooltip-${pokemon.name}`} />
            <img src={pokemon.image} alt={pokemon.name} />
        </div>
    );
}