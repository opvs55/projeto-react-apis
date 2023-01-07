import styled from "styled-components";

export const Container = styled.header`
  background-color: white;
  height: 18vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  button{
    background-color: #33A4F5;
    border-radius: 8px;
    height: 9vh;
    width: 18vw;
    padding: 4px 10px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
    font-family: 'Poppins';
    cursor: pointer;
  }
  .Textpokedex{
    font-style: normal;
    font-weight: 700;
    font-size: 2em;
    line-height: 36px;
    color: #FFFFFF;
  }

  .LogoPoke{
    flex-grow: 2;
    display: flex;
    justify-content: right;
  }
  .ButtonPokedex{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
  .ButtonDetail{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
  .ButtonDetail2{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
  .ButtonDetail2 > button{
    background-color: red;
  }
  .ButtonReturn{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    cursor: pointer;
  }
  .LogoPokePokedex{
    flex-grow: 2;
    display: flex;
    justify-content: left;
  }
  p{
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    text-decoration: underline;
  }

  .gif1{
    width: 5vw;
    height: 10vh;
  }

  .LogoPokePokeDetail{
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }


`;



