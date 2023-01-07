import styled from "styled-components";




export const Container = styled.div`
section{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg,#ee7752, #e73c7e, #23a6d5, #23d5ab);
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
h2{
  font-style: normal;
  font-weight: 48px;
  font-size: 3em;
  line-height: 72px;
  color: white;
  padding: 40px;
  background-color: #5E5E5E;
}
`