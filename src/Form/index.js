import { StyledForm, Fieldset, Legend, LabelText, StyledInput, StyledSelect, Button, Result } from "./styled";
import React, { useState } from "react";
import { currencies } from "../currencies/index.js";
import Date from "./Date";

const INITIAL_CURRENCY = currencies[0].short;

const Form = () => {
    const [amount, setamountExchange] = useState("");
    const [currency, setCurrency] = useState(INITIAL_CURRENCY);
    const [result, setResult] = useState(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
    };

    const calculateResult = (amount, currency) => {
        const { rate, short } = currencies.find(({ short }) => short === currency);

        setResult(`${(+amount / rate).toFixed(2)} ${short}`);
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Fieldset>
                <Date />
                <Legend>Wybierz walutę, którą chcesz przeliczyć</Legend>
                <p>
                    <label>
                        <LabelText>Twoja kwota w PLN:</LabelText>
                        <StyledInput
                            type="number"
                            min="0.01"
                            step="any"
                            value={amount}
                            onChange={({ target }) => setamountExchange(target.value)}
                            required
                            autoFocus
                        />
                    </label>
                </p>
                <label><LabelText> Wybierz walutę:</LabelText>
                    <StyledSelect
                        name="currency"
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                    >
                        {currencies.map((currency) => (
                            <option
                                key={currency.short}
                                value={currency.short}>
                                {currency.name}
                            </option>
                        ))};
                    </StyledSelect>
                </label>
            </Fieldset>
            <Button>Policz</Button>
            <Result>
                Twoja kwota w wybranej
                walucie: <strong>{result}</strong>
            </Result>
        </StyledForm>
    );
};

export default Form;