import { useEffect, useState } from "react";
import "./style.css";

const formatDate = (date) =>
    date.toLocaleString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

export const Date = () => {
    const [date, setDate] = useState(new window.Date());

    useEffect(() => {
        const dateInterval = setInterval(() => {
            setDate(new window.Date());
        }, 1000);

        return () => {
            clearInterval(dateInterval)
        };
    }, []);

    return (
        <div className="date">
            Dzisiaj jest
            {" "}
            {formatDate(date)}
        </div>
    );
};