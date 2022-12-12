import styled from "styled-components";

export const StyledDate = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    font-family: 'Inconsolata', monospace;
    font-size: small;
    color: ${({ theme }) => theme.colors.tealBlue};
`;