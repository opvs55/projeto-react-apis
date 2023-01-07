import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage/HomePage";
import { PokeDexPage } from "../Pages/PokeDexPage/PokeDexPage";
import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";
import { useEffect, useState } from "react";
import PokeDetails from "../Pages/PokeDetails/PokeDetails";


function Router(props) {

  const [pokelist, setPokeList] = useState([])
  const [pokeDex, setPokeDex] = useState([])


  const {cards, setCards} = props

 




  useEffect(() => {
    fetchPokeList()
    if(pokeDex.length>0){
    const pokemonList = JSON.stringify(pokeDex)
    localStorage.setItem("pokelist", pokemonList)
  }
  },[pokeDex, pokelist])

  useEffect(() => {

    const  newPokeList = JSON.parse(localStorage.getItem("pokelist"))
      if( newPokeList !== null){
        setPokeDex(newPokeList)
      }   
  },[])


const fetchPokeList = async () => {
    const newUrl = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${cards}`;
    try{ 
    const response = await axios.get(newUrl);
    setPokeList(response.data.results);
} catch (error) {
    console.log("Error, pokemons não encontrados")
    console.log(error.response);
}
}

const addToPokeDex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokeDex.find(
        (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    )

    if(!isAlreadyOnPokedex){
        const newPokedex = [...pokeDex, pokemonToAdd];
        setPokeDex(newPokedex)
        console.log(pokemonToAdd)
    }
}

const removeFromPokedex = (pokemonToRemove) => {
  const newPokedex = pokeDex.filter(
    (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
  );
  setPokeDex(newPokedex);
};

const context = {
  pokelist: pokelist,
  pokeDex: pokeDex,
  addToPokeDex: addToPokeDex,
  removeFromPokedex: removeFromPokedex,
  cards:cards,
  setCards:setCards
}


  return (
    <GlobalContext.Provider value={context}> 
      <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={ <HomePage />}
        />
        <Route
          path="/pokedex"
          element={ <PokeDexPage/>} />
          <Route
          path="/details/:pokeName"
          element={ <PokeDetails />} />
        </Routes>
    </BrowserRouter>
    </GlobalContext.Provider >
  );
}

export default Router;
