"use client"
import dynamic from "next/dynamic";
import { useState } from "react";
import { Slide } from "react-awesome-reveal";
import AddIcon from "@/components/icons/profile/Add";
const AddAddress = dynamic(() => import("@/app/profile/address/components/addAddress"), { ssr: false });
const Location = dynamic(() => import("@/app/profile/address/components/location"),{ssr : false});

const Page = () => {

    const [showAddAddress, setShowAddAddress] = useState<boolean>(false);
    const locations : number[] = [1,2,3,4,5];

    return (
        <div className="border-[1px] border-[#EDEDED] rounded-[16px] p-[25px]">
            <Slide duration={400} direction="up" triggerOnce>
                <div className="flex items-center justify-between">
                    <p className="text-[#3D3D3D] font-bold text-[24px]">آدرس های من</p>
                    <div className="border border-[#0B79D1] rounded-[8px] flex items-center transition
                    justify-center gap-[4px] py-[8px] px-[24px] cursor-pointer hover:shadow-lg duration-400"
                        onClick={() => setShowAddAddress(!showAddAddress)}>
                        <div className="size-[24px]">
                            <AddIcon />
                        </div>
                        <p className="text-[#0B79D1] font-medium text-[14px]">افزودن آدرس جدید</p>
                    </div>
                </div>
            </Slide>
            {
                showAddAddress && <Slide duration={400} direction="up" triggerOnce className="my-6">
                    <AddAddress />
                </Slide>
            }
            
            <div className="grid grid-cols-1 mt-6 gap-4">
                {
                    locations.map((location,index) => {
                        return (
                            <Location key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}; export default Page;