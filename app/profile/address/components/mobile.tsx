import { useState } from "react";
import { Slide } from "react-awesome-reveal";
import dynamic from "next/dynamic";
import MapIcon from "@/components/icons/profile/map";
import EditMessageIcon from "@/components/icons/profile/editMessage";

const EditAddressMobile = dynamic(() => import("@/app/profile/address/components/editAddressMobile"), { ssr: false });




const Address = () => {

    const [showEdit, setShowEdit] = useState<boolean>(false);

    return (
        <div className="col-span-1">
            <Slide direction="up" duration={400} triggerOnce>
                <div className="flex items-center justify-start gap-2">
                    <div className="size-[20px]">
                        <MapIcon />
                    </div>
                    <p className="text-[#3D3D3D] font-regular text-[14px]">نشانی شما</p>
                </div>
                <div className="my-4 border border-[#EDEDED] rounded-[16px] p-4">
                    <div className="grid grid-cols-8 my-3">
                        <div className="col-span-1 flex items-center justify-center flex">
                            <div className="size-[5px] bg-[#3D3D3D] rounded-full"></div>
                        </div>
                        <div className="col-span-7">
                            <p className="text-[#3D3D3D] font-regular text-[14px] text-justify">
                                بجنورد, میدان شهید, بین شهید و 17 شهریور ,کوچه عزیز مصر ,پلاک 13 </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-8 my-3">
                        <div className="col-span-1 flex items-center justify-center flex">
                            <div className="size-[5px] bg-[#3D3D3D] rounded-full"></div>
                        </div>
                        <div className="col-span-7">
                            <p className="text-[#3D3D3D] font-regular text-[14px] text-justify">
                                شماره همراه  09123456789</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-8 my-3">
                        <div className="col-span-1 flex items-center justify-center flex">
                            <div className="size-[5px] bg-[#3D3D3D] rounded-full"></div>
                        </div>
                        <div className="col-span-7">
                            <p className="text-[#3D3D3D] font-regular text-[14px] text-justify">
                                کد پستی 1278459120745125</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-start gap-2 cursor-pointer"
                    onClick={() => setShowEdit(!showEdit)}>
                    <div className="size-[20px]">
                        <EditMessageIcon />
                    </div>
                    <p className="text-[#2196F3] font-regular text-[14px]">تغییر</p>
                </div>
            </Slide>

            {
                showEdit && <EditAddressMobile setShow={setShowEdit} />
            }
        </div>
    )
}

const ProfileAddressMobile = () => {

    const addresses = [1, 2];

    return (
        <div>
            <p className="text-[#3D3D3D] font-regular text-[16px]">جزئیات آدرس شما</p>
            <div className="grid grid-cols-1 gap-6 my-6">
                {
                    addresses.map((address, index) => {
                        return (
                            <Address key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}; export default ProfileAddressMobile;