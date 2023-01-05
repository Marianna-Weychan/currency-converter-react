import styled from "styled-components";

export const StyledForm = styled.form`
    padding: 30px;
    background-color: ${({ theme }) => theme.colors.greenWhite};
    border-radius: 5px;
    font-size: 20px;
`;

export const Fieldset = styled.fieldset`
    width: 100%;
    max-width: 800px;
    padding: 20px;
    margin: 10px;
    border: 5px solid rgba(32, 96, 113, 0.627);
    border-radius: 5px;
`;

export const Legend = styled.legend`
    padding: 10px;
    margin: 5px;
    background-color: ${({ theme }) => theme.colors.paradiso};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    border-radius: 5px;
`;

export const LabelText = styled.span`
    display: inline-block;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    text-align: center;
`;

export const StyledInput = styled.input`
    max-width: 300px;
    height: 50px;
    width: 100%;
    padding: 20p;
    margin: 10px;
    border: 3px solid ${({ theme }) => theme.colors.astral};
    border-radius: 5px;

&:valid {
   background-color: ${({ theme }) => theme.colors.botticelli};
}`;

export const Button = styled.button`
    width: 100%;
    margin: 10px;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.paradiso};
    border: none;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.white};
    transition: 0.3s;

&:hover {
    	filter: brightness(120%);
}
&:active {
    	filter: brightness(140%);
}`;

export const Result = styled.p`
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    margin: 10px;
    background-color: ${({ theme }) => theme.colors.halfBaked};
`;

export const Info = styled.p`
  color: ${({ theme }) => theme.colors.teal};
  font-size: 15px;
  text-align: center;
`;

export const Loading = styled.p`
    color: ${({ theme }) => theme.colors.teal};
`;

export const Failure = styled.p`
color: ${({ theme }) => theme.colors.crimson};
`;