import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { Footer } from "./FooterStyled";






function FooterMove() {

    const context = useContext(GlobalContext)

    const {cards, setCards} = context
    

    
    const moreCards = () => {
        if(cards< 191){
        setCards(cards + 20)
    }
    }
    const lessCards = () => {
        if(cards > 20){
            setCards(cards - 20)
        }
    }


    return(
    <Footer>
        <button onClick={() => moreCards()}>
            VER MAIS
        </button>
        <button onClick={() => lessCards()}>
            VER MENOS
        </button>
        
    </Footer>
    )
  }

export default FooterMove