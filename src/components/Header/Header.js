import { useLocation, useNavigate, useParams } from "react-router-dom";
import { goToHomePage, goToPokedexPage } from "../../routes/coordinator";
import { Container } from "./Header.styled";
import image from "../../assets/image 1.png"
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";

function Header(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();

  const context = useContext(GlobalContext)

  const {pokeDex, removeFromPokedex, addToPokeDex } = context
  const {pokemon} = props


  console.log(pokeDex)




  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <Container>
          <div className="LogoPoke">
              <img src={image} alt="pokemon"/>
          </div>
          <div className="ButtonPokedex">
            <button className="Textpokedex" onClick={() => goToPokedexPage(navigate)}>
              Pokédex
            </button>
          </div>
            
          </Container>
        );
      case "/pokedex":
        return (
          <>
          <div className="ButtonReturn">
            <p onClick={() => goToHomePage(navigate)}>
              Todos Pokémons
            </p>
            </div>
           <div className="LogoPokePokedex">
              <img src={image} alt="pokemon"/>
            </div>
          </>
        );
        case `/details/${params.pokeName}`:
          return (
          <>
           <div className="ButtonReturn">
              <p onClick={() => goToHomePage(navigate)}>
              Todos Pokémons
              </p>
            </div>
            <div className="LogoPokePokeDetail">
                <img src={image} alt="pokemon"/>
            </div>
            {pokeDex.find((pokemon) => pokemon.name === params.pokeName) ? (
              <div className="ButtonDetail2">
                <button onClick={() => removeFromPokedex(pokemon)}>
                  Excluir da pokédex
                </button>
             </div>
            ):(
              <div className="ButtonDetail">
                <button onClick={() => addToPokeDex(pokemon) }>
                  Capturar
                </button>
              </div>
            )}
          </>
        );
    }
  };

  return <Container>{renderHeader()}</Container>;
}

export default Header;
