import poison from "../assets/types/Frame 3.png"
import grass from "../assets/types/Frame 4.png";
import fire from "../assets/types/Frame 5.png";
import flying from "../assets/types/Frame 6.png";
import water from "../assets/types/Frame 7.png";
import bug from "../assets/types/Frame 8.png";
import normal from "../assets/types/Frame 9.png";
import dark from "../assets/types/Frame 17.png";
import dragon from "../assets/types/Frame 18.png";
import electric from "../assets/types/Frame 19.png";
import fairy from "../assets/types/Frame 20.png";
import fighting from "../assets/types/Frame 21.png";
import ghost from "../assets/types/Frame 22.png";
import ground from "../assets/types/Frame 23.png";
import ice from "../assets/types/Frame 24.png";
import psychic from "../assets/types/Frame 25.png";
import rock from "../assets/types/Frame 26.png";
import steel from "../assets/types/Frame 27.png";

export const getPokemonType = (type) => {
  switch (type) {
    case "poison":
      return poison;
    case "grass":
      return grass;
    case "fire":
      return fire;
    case "flying":
      return flying;
    case "water":
      return water;
    case "bug":
      return bug;
    case "normal":
      return normal;
    case "dark":
      return dark;
    case "dragon":
      return dragon;
    case "electric":
      return electric;
    case "fairy":
      return fairy;
    case "fighting":
      return fighting;
    case "ghost":
      return ghost;
    case "ground":
      return ground;
    case "ice":
      return ice;
    case "psychic":
      return psychic;
    case "rock":
      return rock;
    case "steal":
      return steel;
    default:
      return normal;
  }
};