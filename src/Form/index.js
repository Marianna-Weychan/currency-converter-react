import "./style.css";
import React, { useState } from "react";
import { currencies } from "../currencies/index.js";
import { DateAndClock } from "./Date";


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
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <DateAndClock />
                <legend className="form__legend">Wybierz walutę, którą chcesz przeliczyć</legend>
                <p>
                    <label><span className="form__labelText">Twoja kwota w PLN:</span>
                        <input
                            className="form__field"
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
                <label><span className="form__labelText"> Wybierz walutę:</span>
                    <select
                        className="form__field"
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
                    </select>
                </label>
            </fieldset>
            <button className="form__button">Policz</button>
            <p className="form__result">
                Twoja kwota w wybranej
                walucie: <strong>{result}</strong>
            </p>
        </form>
    );
};

export default Form;