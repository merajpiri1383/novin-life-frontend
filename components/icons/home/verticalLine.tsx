import { FC } from "react";



type Props = {
    color?: string,
}


const VerticalLine : FC<Props> = ({ color = "#282A3A" }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 2 114" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 114C0.701099 102.623 0.5 81.3561 0.5 57C0.5 32.6439 0.701099 11.3774 1 0C1.2989 11.3774 1.5 32.6439 1.5 57C1.5 81.3561 1.2989 102.623 1 114Z" fill={color} />
        </svg>
    )
};export default VerticalLine;