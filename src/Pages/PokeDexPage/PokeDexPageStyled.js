import styled from "styled-components";




export const Container = styled.div`
section{
    display: flex;
    margin-top: 10vh;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg,#ee7752, #e73c7e, #23a6d5, #23d5ab);
    border-radius: 1%;
    animation: gradient 15s ease infinite;
    background-size: 400% 400%;
   
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

`;;