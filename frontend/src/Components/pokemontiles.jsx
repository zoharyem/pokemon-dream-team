import { Tooltip } from 'react-tooltip';
import { useRef, useState } from 'react';

export function PokemonTile({ pokemon, onClick }) {
    const [clickCount, setClickCount] = useState(0);

    const MAX_CLICKS = 3;

    const handleClickEmpty = () => {
        if (clickCount < MAX_CLICKS) {
        setClickCount(clickCount + 1);
        } else {
            setClickCount(0);
            onClick(null); // This will trigger the logic to add a random Pokémon since the slot is empty
        }
    }
    if (!pokemon) { // if the slot is empty
        return (
            <div className='pokemon-tile' onClick = {handleClickEmpty}>
                <div className={`pokemon-tile-image ${clickCount > 0 ? `shake${clickCount}` : ''}`}>
                    <img src="/poke-ball.png" alt="Empty slot" />
                </div>
            </div>
        );
    }
    return (
        <div className="pokemon-tile" onClick={() => onClick(pokemon)}>
            <div className='pokemon-tile-image'>
                <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <h3>{pokemon.name}</h3>
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