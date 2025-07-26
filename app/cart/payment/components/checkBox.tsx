import React, { FC } from "react";


interface Props {
    currentState : string,
    name : string,
    className ?: string,
    setState : React.Dispatch<React.SetStateAction<string>>,
}


const CheckBox : FC<Props> = ({ currentState , name , className , setState }) => {

    return (
        <div 
            onClick={() => setState(name)}
            className={`size-[18px] rounded-[6px] border-[#0A3C63] border-[1px]
            flex items-center justify-center ` + className}>
                {
                    currentState === name && <div className="size-[10px] rounded-[2px] bg-[#0A3C63]"></div>
                }
            </div>
    )
};export default CheckBox;