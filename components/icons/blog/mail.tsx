import { FC } from "react";


interface Props {
    color?: string,
}

const MailIcon: FC<Props> = ({ color = "#3D3D3D" }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 4.5C16.5 3.675 15.825 3 15 3H3C2.175 3 1.5 3.675 1.5 4.5M16.5 4.5V13.5C16.5 14.325 15.825 15 15 15H3C2.175 15 1.5 14.325 1.5 13.5V4.5M16.5 4.5L9 9.75L1.5 4.5" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}; export default MailIcon;