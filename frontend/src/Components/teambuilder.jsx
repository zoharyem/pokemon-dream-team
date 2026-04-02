import { useState } from "react";
import Team from "./team";
import { fetchPokemon } from "../api/api";
import { useEffect } from 'react';

function TeamBuilder() {

  const [team, setTeam] = useState([]); // todo initialise as null
  
  useEffect(() => {
      async function fetchPikachu() {
          const pika = await fetchPokemon("pikachu");
          addPokemon(pika);
      }
      fetchPikachu();
  }, []); // This is a hack to run the useEffect only once, will be removed later


  function addPokemon(pokemon) {
    if (team.length >= 6) {
      alert("Your team is full! Remove a Pokémon before adding another.");
      return;
    }
    setTeam([...team, pokemon]);
    }

  function removePokemon(pokemon) {
    if (!pokemon || !pokemon.id) return;
    setTeam(team.filter((p) => p && p.id !== pokemon.id));
  }

  return (
    <div className="teambuilder">
      <h2>Team builder</h2>
      <Team team={team} onAdd={addPokemon} onRemove={removePokemon} />
    </div>
  );
}

export default TeamBuilder;