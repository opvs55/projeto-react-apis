import styled from "styled-components";




export const Footer = styled.div`

height: 10vh;
display: flex;
align-items: center;
justify-content: space-around;
background-color: #5E5E5E;



    button{
    background-color: #33A4F5;
    border-radius: 8px;
    height: 50px;
    width: 287px;
    padding: 4px 10px;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins';
    }

    @media screen and (max-width: 800px){
        button{
            width: 200px;
            height: 40px;
        }
    }
`