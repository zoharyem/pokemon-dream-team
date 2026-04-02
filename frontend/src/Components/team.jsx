import pokemontiles from './pokemontiles';

export default function Team({ team, onAdd, onRemove} ) {

    return (
    <div className="team-container">
      <h1>Dream Team</h1>
      <div className="team-grid">
        <div className='pokemon-tile-row'>
        <pokemontiles.PokemonTile pokemon = {team[0]}/>
        <pokemontiles.PokemonTile pokemon = {team[1]}/>
        <pokemontiles.PokemonTile pokemon = {team[2]}/>
        </div>
        <div className='pokemon-tile-row'>
        <pokemontiles.PokemonTile pokemon = {team[3]}/>
        <pokemontiles.PokemonTile pokemon = {team[4]}/>
        <pokemontiles.PokemonTile pokemon = {team[5]}/>
        </div>
      </div>
    </div>
  );
}
