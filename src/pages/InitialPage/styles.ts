import styled,{keyframes} from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
export const NameContainer = styled.span` 

    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
`;



export const Letter1 = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 50px;
    color: #FFFFFF;
    transition: opacity 5.5s;
    opacity: 0;
    animation: ${fadeIn} 0.5s ease-in 1s 1 normal forwards;
`;

export const Letter2 = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 50px;
    color: #FFFFFF;
    transition: opacity 6s;
    opacity: 0;
    animation: ${fadeIn} 0.5s ease-in 1.25s 1 normal forwards;
    margin-left: 20px;
`;

export const Letter3 = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 50px;
    color: #FFFFFF;
    transition: opacity 0.5s;
    opacity: 0;
    animation: ${fadeIn} 0.5s ease-in 1.5s 1 normal forwards;
    margin-left: 20px;
`;

export const Letter4 = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 50px;
    color: #FFFFFF;
    transition: opacity 0.5s;
    opacity: 0;
    animation: ${fadeIn} 0.5s ease-in 1.75s 1 normal forwards;
    margin-left: 20px;
`;

export const Letter5 = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 50px;
    color: #FFFFFF;
    opacity: 0;
    transition: opacity 0.5s;
    animation: ${fadeIn} 0.5s ease-in 2s 1 normal forwards;
    margin-left: 20px;
`;