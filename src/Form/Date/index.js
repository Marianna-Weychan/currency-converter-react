import { useCurrentDate } from "./useCurrentDate";
import { StyledDate } from "./styled";

const Date = () => {
    const currentDate = useCurrentDate();

    const formatDate = (currentDate) =>
        currentDate.toLocaleString(undefined, {
            weekday: "long",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        });

    return (
        <StyledDate>
            Dzisiaj jest {formatDate(currentDate)}
        </StyledDate>
    );
};

export default Date;