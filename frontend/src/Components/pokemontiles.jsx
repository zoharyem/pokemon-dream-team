import { Tooltip } from 'react-tooltip';
import { useRef, useState } from 'react';

export function PokemonTile({ pokemon, onClick }) {
    const [clickCount, setClickCount] = useState(0);
    const [stateChanged, setStateChanged] = useState(false);

    const MAX_CLICKS = 3;

    const handleClick = () => {
        if (clickCount < MAX_CLICKS) {
        setClickCount(clickCount + 1);
        } else {
            setStateChanged(true);
            setClickCount(0);
        }
    }

    if (!pokemon) {
        return (
            <div className='pokemon-tile' onClick = {handleClick}>
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