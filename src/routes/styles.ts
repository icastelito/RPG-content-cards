import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const TransitionWrapper = styled.div`
  

  
    opacity: 1;
    animation: ${fadeIn} 2s ease-in-out;
  

`;
