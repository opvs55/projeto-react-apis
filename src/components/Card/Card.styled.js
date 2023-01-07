import styled from "styled-components";
import background from "../../assets/background.png"


export const Container = styled.div`

  background-image: url(${background});
  background-position: right;
  background-color: ${(props) => props.color};
  display: flex;
  width: 400px;
  height: 210px;
  margin: 30px;
  border-radius: 12px;
  box-shadow: 2px 2px 2px darkblue;

  .pokemonIMG {
    height: 200px;
    width: 200px;
    position: relative;
    bottom: 80px;
    right: 20px;
  }


  button {
    display: flex;
    justify-content: row;
    justify-content: center;
    padding: 4px 10px;
    width: 146px;
    height: 38px;
    border-radius: 8px;
    transition: all .5s;
    position: relative;
    bottom: 20px;
    left: 10px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    font-style: normal;
    cursor: pointer;
    background-color: white;
  }
  .button2{
    background-color: red;
  }
  .button{
    flex-grow: 2;
    display: flex;
    align-items: end;
    font-style: normal;
    font-weight: 700;
    font-size: 1em;
    line-height: 24px;
    text-decoration: underline;
    color: white;
    cursor: pointer;
  }
  .type{
    flex-grow: 1;
  }
  

  button:hover{
    letter-spacing: 2px;
  }
  .Details{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 250px;
    padding: 20px;
  }
  .Details2{
    display: flex;
    flex-direction: column;
  }
  .id{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1em;
    line-height: 19px;
    color: white;
  }
  .name{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 2em;
    line-height: 39px;
    color: white;
    margin: 4px;
  }

`;




export const Type = styled.div`
    display: flex;

`

export const CardType = styled.img`
  width: 90px;
  height: 30px;
  margin: 5px;
`;
