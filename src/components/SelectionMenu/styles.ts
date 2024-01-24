import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-radius: 10px;
`;
    
export const CardContent = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-height: 20dvh;
    width: 15dvh;
    background-color: #988abd;
    height: auto;
    padding: 0 20px;
    margin: 10px;
    color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 10px;
    transition: 0.5s;
    
    &:hover {
        background-color: #ffffff;
        transition: 0.75s;
        transform: scale(1.025);
        box-shadow: 0 0 10px #ffffff;
        color: #988abd;
    }
`;