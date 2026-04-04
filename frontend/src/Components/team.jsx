import { PokemonTile } from "./pokemontiles";

export default function Team({ team, onClick } ) {

    return (
    <div className="team-container">
      <h1>Dream Team</h1>
      <div className="team-grid">
        <div className='pokemon-tile-row'>
        <PokemonTile pokemon = {team[0]} onClick = {onClick}/>
        <PokemonTile pokemon = {team[1]} onClick = {onClick}/>
        <PokemonTile pokemon = {team[2]} onClick = {onClick}/>
        </div>
        <div className='pokemon-tile-row'>
        <PokemonTile pokemon = {team[3]} onClick = {onClick}/>
        <PokemonTile pokemon = {team[4]} onClick = {onClick}/>
        <PokemonTile pokemon = {team[5]} onClick = {onClick}/>
        </div>
      </div>
    </div>
  );
}
