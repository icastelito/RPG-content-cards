import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

export const Letter = styled.a<{ delay: number }>`
    animation: ${fadeIn} 350ms ease-in-out forwards;
    animation-delay: ${props => props.delay}s;
    opacity: 0;
    font-family: ${(props) => props.theme.fonts.animation};
    color: #fff;
    text-decoration: none;
    font-size: 4em;
`;