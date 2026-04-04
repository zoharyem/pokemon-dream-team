import { useState } from "react";
import Team from "./team";
import { fetchPokemonOptions } from "../api/api";
import { useEffect } from 'react';
import Selector from "./selector";

function TeamBuilder() {

  const [team, setTeam] = useState([]); // todo initialise as null

  // call options data
  const [pokemonOptions, setPokemonOptions] = useState([]); // TODO: useState to store options data

  useEffect(() => {
      async function getOptions() { // defines a function to fetch pokemon options from the api
          const options = await fetchPokemonOptions();
          setPokemonOptions(options.data);    // which then sets the pokemon options
      }
      getOptions(); // calls the defines function
  }, []); // only once when the component is first rendered.


  function addPokemonToTeam(pokemon) {
    if (team.length >= 6) {
      alert("Your team is full! Remove a Pokémon before adding another.");
      return;
    }
    setTeam([...team, pokemon]);
    setPokemonOptions(pokemonOptions.filter((option) => option.name !== pokemon.name));
    }

  function removePokemonFromTeam(pokemon) {
    console.log(`Removing ${pokemon.name} from the team...`); //todo: remove this log
    setTeam(team.filter((p) => p.name !== pokemon.name));
    console.log(`Removed ${pokemon.name} from the team.`); //todo: remove this log
  }

  return (
    <div className="teambuilder">
      <h2>Team builder</h2>
      <Team team={team} onClick={removePokemonFromTeam} />
      <h2>Pokemon Selector</h2>
      Select your pokemon here!
      <Selector onClick={addPokemonToTeam} pokemonOptions={pokemonOptions} />
    </div>
  );
}

export default TeamBuilder;