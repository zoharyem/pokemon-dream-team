import pokemontiles from './pokemontiles';

export default function Team() {
   return (
    <div className="team-container">
      <h1>Dream Team</h1>
      <div className="team-grid">
        <div className='pokemon-tile-row'>
        <pokemontiles.PokemonTile/>
        <pokemontiles.PokemonTile/>
        <pokemontiles.PokemonTile/>
        </div>
        <div className='pokemon-tile-row'>
        <pokemontiles.PokemonTile/>
        <pokemontiles.PokemonTile/>
        <pokemontiles.PokemonTile/>
        </div>
      </div>
    </div>
  );
}
