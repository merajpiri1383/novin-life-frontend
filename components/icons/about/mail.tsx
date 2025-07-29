import { FC } from "react";


interface Props {
    color?: string,
}


const MailIcon: FC<Props> = ({ color = "#3D3D3D" }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5 6.24023C22.5 5.14023 21.6 4.24023 20.5 4.24023H4.5C3.4 4.24023 2.5 5.14023 2.5 6.24023M22.5 6.24023V18.2402C22.5 19.3402 21.6 20.2402 20.5 20.2402H4.5C3.4 20.2402 2.5 19.3402 2.5 18.2402V6.24023M22.5 6.24023L12.5 13.2402L2.5 6.24023" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
};export default MailIcon;