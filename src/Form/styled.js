import styled from "styled-components";

export const StyledForm = styled.form`
    padding: 30px;
    background-color: #e6e7e0d9;
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
    background-color: #368e8ef2;
    color: white;
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

export const FormField = styled.input`
    max-width: 300px;
    height: 50px;
    width: 100%;
    padding: 20p;
    margin: 10px;
    border: 3px solid #35819e;
    border-radius: 5px;

&:valid {
     background-color: rgba(126, 184, 228, 0.329);
}`;

export const StyledSelect = styled.select`
    max-width: 300px;
    height: 50px;
    width: 100%;
    padding: 20p;
    margin: 10px;
    border: 3px solid #35819e;
    border-radius: 5px;
`

export const Button = styled.button`
   width: 100%;
    margin: 10px;
    padding: 10px;
    background-color: hsla(192, 59%, 34%, 0.729);
    border: none;
    border-radius: 5px;
    color: white;
    transition: 0.3s;

&:hover {
    background-color: hsla(192, 59%, 45%, 0.729);
}
&:active {
    background-color: hsla(192, 59%, 65%, 0.729);
}`;

export const Result = styled.p`
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    margin: 10px;
    background-color: #59909f54;
`;



