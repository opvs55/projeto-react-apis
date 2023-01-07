import styled from "styled-components"
import background from "../../assets/background.png"


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #5E5E5E;

    .Details{
        display: flex;
        justify-content: flex-start;
        width: 74%;
        margin-top: 14px;
    }
    h1{
        font-family: "Poppis";
        font-style: normal;
        font-weight: 700;
        font-size: 3em;
        line-height: 72px;
        color: white;
        
    }
`

export const CardDetails = styled.div`
width: 75vw;
height: 80vh;
background: url(${background});
background-color: ${(props) => props.color};
margin: 1em;
border-radius: 37.89px;
display: flex;
gap: 30px;



    .Container1{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .FirstContainer{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap:20px; 
    }
    .LittlePokeContainer{
        width: 200px;
        height: 200px;
        border-radius: 8px;
        border: 2px solid #FFFFFF;
        background: white;
        margin: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .BigPokeContainer{
        background-color: white;
        height: 470px;
        width: 250px;
        border-radius: 12px;
        margin: 20px;
    }
    .SecondContainer{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .TrirdContainer{
        display: flex;
        flex-direction: column;
        margin: 10px;
    }
    .MediumPokeContainer{
        width: 230px;
        height: 330px;
        background-color: #FFFFFF;
        border-radius: 8px;
        margin: 5px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    .MediumPokeContainer > h2{
        font-family: initial;
        font-style: normal;
        font-weight: 800;
        font-size: 2em;
        line-height: 29px;
        margin: 10px;
    }
    .MediumPokeContainer > h3{
        background-color: #ECECEC;
        width: 120px;
        height: 37px;
        border: 1px dashed rgba(0, 0, 0, 0.14);
        border-radius: 12px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px;
        margin: 5px;
        margin-left: 20px;
        font-size: .7em;
    }

    .Container2{
        display: flex;
        flex-direction: column;
    }


    .PokeIMG{
        height: 282px;
        width: 282px;
    }
    .Poketype{
        display: flex;
    }
    .Poketype > img{
        width: 99px;
        height: 31px;
        margin: 5px;
    }

    .pokeIMG{
        position: relative;
        bottom: 60px;
        right: 25px;
    }

    .id{
        font-family: 'Inter', sans-serif;
        color: white;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
    }
    .Pokename{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 2.5em;
        color: white;
    }
`