import { useEffect, useState } from "react";
import "./style.css";

const formattedDate = (date) =>
    date.toLocaleString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

export const DateAndClock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const dateInterval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(dateInterval)
        };
    }, []);

    return (
        <div className="form__date">
            Dzisiaj jest
            {" "}
            {formattedDate(date)}

        </div>
    );
};