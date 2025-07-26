"use client"
import React, { FC, useState } from "react";

type TimeType = {
    time : string,
    currentTime : string,
    setTime : React.Dispatch<React.SetStateAction<string>>,
}

const Time : FC<TimeType>= ({ time , currentTime , setTime }) => {
    return (
        <div className="cursor-pointer hover:translate-y-[-10px] transition duration-300" 
            onClick={() => setTime(time)}>
            <div className={`border border-[#0A3C63] py-[8px] px-[24px] rounded-[8px]
                ${currentTime === time && "bg-[#E9F3FB] "} transition duration-400`}>
                <p className="text-[#0A3C63]">{time}</p>
            </div>
            <p className="text-[#0A3C63] font-medium text-[14px] mt-3 text-center">09:00 - 22:00</p>
        </div>
    )
}

const SendTime = () => {

    const items : string[] = ["15 مهر ","16 مهر ","17 مهر ","18 مهر "];

    const [currentTime,setTime] = useState<string>("");

    return (
        <div className="my-6">
            <p className="text-[#3D3D3D] font-regular text-[16px]">زمان ارسال انتخابی شما</p>
            <div className="my-3 bg-[#EDEDED] h-[1px] w-full"></div>
            <div className="flex items-center jusitfy-start gap-6 my-6">
                {
                    items.map((item,index) => {
                        return (
                            <Time 
                                currentTime={currentTime} 
                                time={item} 
                                setTime={setTime}
                                key={index} 
                            />
                        )
                    })
                }
            </div>
        </div>
    )
};export default SendTime;