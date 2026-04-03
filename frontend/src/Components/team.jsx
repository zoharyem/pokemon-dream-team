import { PokemonTile } from "./pokemontiles";

export default function Team({ team, onAdd, onRemove} ) {

    return (
    <div className="team-container">
      <h1>Dream Team</h1>
      <div className="team-grid">
        <div className='pokemon-tile-row'>
        <PokemonTile pokemon = {team[0]}/>
        <PokemonTile pokemon = {team[1]}/>
        <PokemonTile pokemon = {team[2]}/>
        </div>
        <div className='pokemon-tile-row'>
        <PokemonTile pokemon = {team[3]}/>
        <PokemonTile pokemon = {team[4]}/>
        <PokemonTile pokemon = {team[5]}/>
        </div>
      </div>
    </div>
  );
}
