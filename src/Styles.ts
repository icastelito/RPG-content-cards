import styled from "styled-components";

export const Container = styled.section`
  
`;

export const Button = styled.button`
    background-color:${(props) => props.theme.getColor("secondary", 0.8)};
    color: ${(props) => props.theme.colors.white};
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    position: absolute;
    top: 5px;
    left: 50px;
    transition: 0.5s;
    z-index: 100;
    &:hover {
        background-color: ${(props) => props.theme.getColor("secondary", 0.8)};
        transition: 0.75s;
    }
    `;
