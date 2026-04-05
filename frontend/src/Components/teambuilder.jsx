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


  function addRandomOrRemovePokemon(pokemon = null) {
    if (team.length >= 6) {
      alert("Your team is full! Remove a Pokémon before adding another.");
      return;
    } else if (pokemon) {
      removePokemonByName(pokemon);
    } else {
      addRandomPokemon();
    }
  }

  function addPokemonByName(pokemon) {
    if (team.length >= 6) {
      alert("Your team is full! Remove a Pokémon before adding another.");
      return;
    }
    setTeam([...team, pokemon]);
    setPokemonOptions(pokemonOptions.filter((option) => option.name !== pokemon.name));
    }

  function removePokemonByName(pokemon) {
    setTeam(team.filter((p) => p.name !== pokemon.name));
    setPokemonOptions([...pokemonOptions, pokemon]);
  }

  function addRandomPokemon() {
      if (team.length >= 6) {
        alert("Your team is full! Remove a Pokémon before adding another.");
        return;
      } else if (pokemonOptions.length === 0) {
        alert("No more Pokémon options available! Remove a Pokémon from your team to add more.");
        return;
      } else {
        const randomIndex = Math.floor(Math.random() * pokemonOptions.length);
        const randomPokemon = pokemonOptions[randomIndex];
        addPokemonByName(randomPokemon);
      }
     }

  return (
    <div className="teambuilder">
      <h2>Team builder</h2>
      <Team team={team} onClick={addRandomOrRemovePokemon} /> {/* When clicking a Pokémon tile in the team, remove a Pokémon; otherwise, add a random one */}
      <h2>Pokemon Selector</h2>
      Select your pokemon here!
      <Selector onClick={addPokemonByName} pokemonOptions={pokemonOptions} />
    </div>
  );
}

export default TeamBuilder;