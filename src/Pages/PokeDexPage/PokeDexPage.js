import { useContext, useEffect } from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import { BASE_URL2 } from "../../constants/url";
import { GlobalContext } from "../../context/GlobalContext";
import { Container } from "./PokeDexPageStyled";
import gif1 from "../../assets/jCIAyhK.gif"


export function PokeDexPage(){
    const context = useContext(GlobalContext)
    const {pokeDex, removeFromPokedex} = context
    

    useEffect(() => {

        console.log(pokeDex)
    }, [pokeDex])

    return(
        <Container>
         <Header/>
         <section>
            { pokeDex.length <= 0  ? <img src={gif1} alt="pokemon"/> : pokeDex.map((pokemon) =>{
                return(
                    <Card
                    key={pokemon.name}
                    pokemonUrl={`${BASE_URL2}/${pokemon.name}`}
                    removeFromPokedex={removeFromPokedex}
                    />
                )
            })}
         </section>
        </Container>
    )
}