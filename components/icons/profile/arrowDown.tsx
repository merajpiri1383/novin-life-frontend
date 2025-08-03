import { FC } from "react";


interface Props {
    color?: string,
}


const ArrowDownIcon: FC<Props> = ({ color = "#3D3D3D" }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9485 5.45312H7.79512H4.05512C3.41512 5.45312 3.09512 6.22646 3.54845 6.67979L7.00179 10.1331C7.55512 10.6865 8.45512 10.6865 9.00845 10.1331L10.3218 8.81979L12.4618 6.67979C12.9085 6.22646 12.5885 5.45312 11.9485 5.45312Z" fill={color} />
        </svg>
    )
};export default ArrowDownIcon;