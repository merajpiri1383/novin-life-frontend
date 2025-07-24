import React, { FC, useState } from "react";
import { Slide } from "react-awesome-reveal";


type Props = {
    className?: string,
    placeholder?: string,
    icon?: React.ReactNode,
    value: string | null,
    setValue: React.Dispatch<React.SetStateAction<string | null>>,
    items : any[],
    classNameDropDown ?: string,
}

const DropDownInput : FC<Props> = ({
    className,
    placeholder = "",
    icon,
    value,
    setValue,
    items,
    classNameDropDown,
}) => {

    const [show, setShow] = useState<boolean>(false);
    return (
        <div className={"cursor-pointer w-full " + className}
            onClick={() => setShow(!show)}>
            <p>
                {
                    value ? value : placeholder
                }
            </p>
            {icon}
            {
                show && <Slide
                    direction="up"
                    className="bg-white absolute -left-1 -right-1 -top-1 rounded-[8px] p-2"
                    duration={300}>
                        <div className={`h-48 grid grid-cols-1 overflow-y-scroll 
                            hide-scrollbar gap-4 ` + classNameDropDown}>
                            {
                                items.map((item,index) => {
                                    return (
                                        <p 
                                            className="p-2 hover:bg-[#F5F5F5] rounded-[8px]
                                            transition duration-400"
                                            onClick={() => setValue(item)}
                                            key={index}>{item}</p>
                                    )
                                })
                            }
                        </div>
                </Slide>
            }
        </div>
    )
}; export default DropDownInput;