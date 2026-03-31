import { useState } from "react";
import Team from "./team";

function TeamBuilder() {
  const [team, setTeam] = useState([]);

  function addPokemon(pokemon) {
    if (team.length >= 6) {
      alert("Your team is full! Remove a Pokémon before adding another.");
      return;
    }
    setTeam([...team, pokemon]);
  }

  function removePokemon(pokemon) {
    setTeam(team.filter((p) => p.id !== pokemon.id));
  }

  return (
    <div className="teambuilder">
      <h2>Team builder</h2>
      <Team team={team} onAdd={addPokemon} onRemove={removePokemon} />
    </div>
  );
}

export default TeamBuilder;