import { Container } from "./HomePageStyled";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import FooterMove from "../../components/Footer/Footer";




export function HomePage(){
    const context = useContext(GlobalContext)

    const {pokelist, addToPokeDex, pokeDex} = context



    const filteredPokelist = () => 
        pokelist.filter(
            (pokemonInList) =>
            !pokeDex.find(
                (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
            )
        )

    const pokeArray = filteredPokelist()

    

    return(


        <Container>
            <Header />
            <h2>Todos os pokemons</h2>
            <section>
                {pokeArray.map((pokemon) => (
                    <Card
                    key={pokemon.name}
                    pokemonUrl={pokemon.url}
                    addToPokeDex={addToPokeDex}/>
                ))}
            </section>
            <FooterMove />
        </Container>
    )
}