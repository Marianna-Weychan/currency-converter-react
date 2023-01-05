import { StyledForm, Fieldset, Legend, LabelText, StyledInput, Button, Result, Info, Loading, Failure } from "./styled";
import React, { useState } from "react";
import Date from "./Date";
import { useRatesData } from "./useRatesData";


const Form = () => {
    const [amount, setamountExchange] = useState("");
    const [currency, setCurrency] = useState("EUR");
    const [result, setResult] = useState();
    const ratesData = useRatesData();

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
    };

    const calculateResult = (amount, currency) => {
        const rate = ratesData.rates[currency];

        setResult(`${(+amount * rate).toFixed(2)} ${currency}`);
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            {ratesData.state === "loading"
                ? (
                    <Loading>
                        Chwileczkę...⌛<br />Ładuję kursy z Europejskiego Banku Centralnego
                    </Loading>
                )
                :
                ratesData.state === "error" ? (
                    <Failure>
                        Ups... coś poszło nie tak 😐 <br />
                        Sprawdź czy masz połączenie z internetem i spróbuj odświeżyć stronę przeglądarki.
                    </Failure>
                ) : (
                    <>
                        <Fieldset>
                            <Date />
                            <Legend>Twój przelicznik walut</Legend>
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
                                <StyledInput
                                    as="select"
                                    name="currency"
                                    value={currency}
                                    onChange={({ target }) => setCurrency(target.value)}
                                >
                                    {Object.keys(ratesData.rates).map((currency) => (
                                        <option
                                            key={currency}
                                            value={currency}>
                                            {currency}
                                        </option>
                                    ))};
                                </StyledInput>
                            </label>
                        </Fieldset >
                        <Button>Policz</Button>
                        <Result>
                            Twoja kwota w wybranej
                            walucie: <strong>{result}</strong>
                        </Result>
                        <Info>
                            Kursy walut aktualne na dzień: {ratesData.date}
                        </Info>
                    </>
                )
            }
        </StyledForm >
    )
};
export default Form