import { FC } from "react";


interface Props {
    color?: string,
}


const MinimizeIcon: FC<Props> = ({ color = "#3D3D3D" }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 7.33325H12.5V8.66659H4.5V7.33325Z" fill={color} />
        </svg>
    )
};export default MinimizeIcon;