import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../routes/coordinator";
import { Container, Type, CardType } from "./Card.styled";
import { getPokemonColors } from "../../constants/ColorByType";
import { getPokemonType } from "../../constants/types";

function Card(props) {
  const { pokemonUrl, addToPokeDex, removeFromPokedex } = props;

  
  const location = useLocation();
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(pokemonUrl);
      setPokemon(response.data);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error);
    }
  };

 
  
  

  
  return (
    <Container  color={getPokemonColors(pokemon.types && pokemon.types[0].type.name)}>
      <div className="Details">
        <p className="id">#{pokemon.id}</p>
        <h1 className="name">{pokemon.name}</h1>
        <Type className="type">
          {pokemon.types?.map((type, index) => {
            return (
              <CardType src={getPokemonType(type.type.name)} key={index} />
            )
          })}
        </Type>
        <p className="button" onClick={() => goToDetailsPage(navigate, pokemon.name)}>
          Detalhes
        </p>
      </div>
      <div className="Details2">
          <img className="pokemonIMG" src={pokemon.sprites?.other["official-artwork"].front_default} alt={`${pokemon.name}`} />
          <div>
            {location.pathname === "/" ? (
              <button className="button1" onClick={() => addToPokeDex(pokemon)}>
                CAPTURAR!
              </button>
              ) : (
              <button className="button2" onClick={() => removeFromPokedex(pokemon)}>
                EXCLUIR
              </button>
              )}
          </div>
      </div>
    </Container>
  );
}

export default Card;
