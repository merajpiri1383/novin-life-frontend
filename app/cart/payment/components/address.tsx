"use client"
import { FC, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import MapImage from "@/public/dev/map.png";
import AddIcon from "@/components/icons/profile/Add";
import EditIcon from "@/components/icons/cart/edit";
import { Slide } from "react-awesome-reveal";

const Modal = dynamic(() => import("@/hooks/modal"), { ssr: false });
const AllAddresses = dynamic(() => import("@/app/cart/payment/components/allAddresses"),{ssr : false});

export const AddressDetails = () => {
    return (
        <div className="grid grid-cols-2 gap-6">
            <div className="col-span-1 h-[250px] relative">
                <Image
                    src={MapImage}
                    alt="map image"
                    fill={true}
                    sizes="100%"
                    className="rounded-[16px]"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
            </div>
            <div className="col-span-1 grid grid-cols-1 items-between">
                <p className="col-span-1 text-[16px] font-regular text-[#3D3D3D]">
                    بجنورد, میدان شهید, بین شهید و 17 شهریور ,کوچه عزیز مصر ,پلاک 13
                </p>
                <p className="col-span-1 text-[16px] font-regular text-[#3D3D3D]">
                    خراسان شمالی - بجنورد
                </p>
                <p className="col-span-1 text-[16px] font-regular text-[#3D3D3D]">
                    1071311
                </p>
                <p className="col-span-1 text-[16px] font-regular text-[#3D3D3D]">
                    09014892023
                </p>
                <p className="col-span-1 text-[16px] font-regular text-[#3D3D3D]">
                    سینیور جئاد
                </p>

            </div>
        </div>
    )
}




const Address: FC = () => {

    const [showModal, setShowModal] = useState<boolean>(false);

    const showHandler = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShowModal(true);
    }

    return (
        <>
            <Slide duration={400} direction="up" triggerOnce
                className="border-[1px] border-[#CBCBCB] p-4 rounded-[16px] my-4">
                <div>
                    <AddressDetails />
                    <div className="flex items-center justify-end gap-[8px]">
                        <div className="border-[1px] border-[#2196F3] p-[8px] flex items-center 
                            justify-center gap-[8px] rounded-[8px] cursor-pointer">
                            <div className="size-[24px]">
                                <AddIcon color="#2196F3" />
                            </div>
                            <p className="text-[#2196F3] text-[16px] font-regular">آدرس جدید</p>
                        </div>
                        <div
                            onClick={(e) => showHandler(e)}
                            className="border-[1px] border-[#2196F3] p-[8px] flex items-center 
                            justify-center gap-[8px] rounded-[8px] cursor-pointer">
                            <div className="size-[24px]">
                                <EditIcon color="#2196F3" />
                            </div>
                            <p className="text-[#2196F3] text-[16px] font-regular">تغییر</p>
                        </div>
                    </div>
                </div>
            </Slide>
            {
                showModal && <Modal
                    setShow={setShowModal}
                    className="min-w-[80%]"
                    content={<AllAddresses />}
                />
            }
        </>
    )
}; export default Address;