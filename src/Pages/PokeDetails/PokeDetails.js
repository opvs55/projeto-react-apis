import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import { getPokemonType } from "../../constants/types"
import { BASE_URL2 } from "../../constants/url"
import { Container,
         CardDetails } from "./PokeDetailStyled"
import { Progress, Flex, Heading, Text} from "@chakra-ui/react";
import { getPokemonColors } from "../../constants/ColorByType"



function PokeDetails(){


const [pokemon, setPokemon] = useState({})

const params = useParams();

const fetchPokeDetails = async () =>{
    try{const response = await axios.get(`${BASE_URL2}/${params.pokeName}`);
    setPokemon(response.data);}
 catch (error) {
    console.log("erro ao buscar detalhes de pokemon")
    console.log("error.response");
}
}

useEffect(()=>{
    fetchPokeDetails()
    console.log(pokemon)
},[])


return(
  <>
    <Header pokemon={pokemon} />
    <Container >
        <div className="Details">
             <h1>Detalhes</h1>
        </div>
        <CardDetails color={getPokemonColors(pokemon.types && pokemon.types[0].type.name)} >
            <div className="Container1">
                <div className="FirstContainer">
                    <div className="LittlePokeContainer">
                        <img className="PokeIMG" src={pokemon.sprites?.front_default} alt={`${pokemon.name}`}/>
                    </div>
                    <div className="LittlePokeContainer">
                        <img className="PokeIMG" src={pokemon.sprites?.back_default} alt={`${pokemon.name}`}/>
                    </div>
                </div>
                <div className="SecondContainer">
                    <div className="BigPokeContainer">
                        <Heading>Base stats</Heading>
                        <Flex flexDirection={"column"} borderTop={"1px grey solid"} marginTop={"16px"}>
                        {pokemon.stats?.map((stat) => {
                            return (
                                <div key={stat.stat.name}>
                                    <Flex   Flex borderBottom={"1px grey solid"} h={"40px"} alignItems={"center"}>
                                    <Flex w="100px">
                                        <Text w="60px" textAlign={"end"} fontSize={"14px"}>
                                            {stat.stat.name
                                            .replace("special-attack", "Sp. Atk")
                                            .replace("special-defense", "Sp. Def")}
                                        </Text>
                                        <Text fontSize={"14px"} margin={"auto"}>
                                            {stat.base_stat}
                                        </Text>
                                    </Flex>
                                        <Progress size='xs' w={"200px"} borderRadius={"4px"} bgColor={"#ffffff"} colorScheme={ 
                                            stat.base_stat < 50
                                            ? "orange"
                                            : stat.base_stat < 80
                                            ? "yellow"
                                            : "green"
                                        }
                                        value={stat.base_stat}
                                        />
                                    </Flex>
                                </div>
                                );
                            })}
                        {pokemon.stats && (
                            <Flex borderBottom={"1px grey solid"} h={"40px"} alignItems={"center"}>
                                <Text w={"60px"} textTransform={"capitalize"} textAlign={"end"} fontSize={"14px"}>
                                    Total
                                </Text>
                                <Text margin={"8px"} fontSize={"14px"} fontWeight={"bold"}>
                                    {pokemon.stats.reduce((acc, stat) => acc + stat.base_stat,0)}
                                </Text>
                            </Flex>
                        )}
                        </Flex>       
                    </div>
                </div>
            </div>
            <div className="Container2">
                <div className="TrirdContainer">
                    <p className="id">#{pokemon.id}</p>
                    <p className="Pokename">{pokemon.name}</p>
                    <div className="Poketype">
                        {pokemon.types?.map((type, index) => {
                        return (
                        <img src={getPokemonType(type.type.name)} key={index} />
                    );
                    })}
                    </div> 
                </div>
                <div className="MediumPokeContainer">
                    <h2>Moves: </h2>
                    {pokemon.moves?.slice(0, 4).map((move, index) => {
                    return <h3 key={index}>{move.move.name}</h3>;
                    })}
                </div>
            </div>
            <div>
                <div className="pokeImagem">
                    <img className="pokeIMG" src={pokemon.sprites?.other["official-artwork"].front_default} alt={pokemon.name} />
                </div>
            </div>
        </CardDetails>
    </Container>
  </>
    
)
}



export default PokeDetails