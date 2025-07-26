import React, { FC, useEffect } from "react";
import { Zoom } from "react-awesome-reveal";
import CloseSquareIcon from "@/components/icons/cart/closeSquare";



interface Props {
    content?: React.ReactNode,
    duration?: number,
    setShow : React.Dispatch<React.SetStateAction<boolean>>,
    className ?: string,
}


const Modal: FC<Props> = ({ content, duration = 400 , setShow , className }) => {

    const closeHandler = () => setShow(false);

    useEffect(() => {
        window.addEventListener("click",closeHandler);
        return () => window.removeEventListener("click",closeHandler);
    },[]);

    return (
        <div className="bg-[#000000]/50 fixed top-0 left-0 right-0 bottom-0 z-[20]">
            <Zoom duration={duration} className="flex items-center justify-center h-full">
                <div    
                    onClick={(e) => e.stopPropagation()} 
                    className={`min-w-[60%] bg-white w-fit h-fit rounded-[16px] p-8 my-48 ${className}`}>
                    <div className="flex justify-start mb-6">
                        <div className="size-[24px] cursor-pointer transition active:scale-95
                            hover:scale-110 duration-300" 
                            onClick={() => setShow(false)}>
                            <CloseSquareIcon />
                        </div>
                    </div>
                    {
                        content
                    }
                </div>
            </Zoom>
        </div>
    )
}; export default Modal;