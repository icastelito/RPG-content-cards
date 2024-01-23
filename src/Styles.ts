import styled from "styled-components";

export const Background = styled.div` 

    text-decoration: none;
    box-sizing: border-box;
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`;


export const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #f9f9f9;
    height: 25vh;
    width: 100%;
    padding: 0 20px;
`;

export const Body = styled.body`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    height: 80vh;
    width: 100vw;
    padding: 0 20px;
`;