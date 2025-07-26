import EditIcon from "@/components/icons/cart/edit"
import { AddressDetails } from "./address"




const AllAddresses = () => {
    return (
        <div className="mx-[80px] hide-scrollbar max-h-[70vh] overflow-y-scroll">
            <p className="text-[#3D3D3D] font-semibold text-[24px]">انتخاب آدرس</p>
            <div className="my-4 h-[1px] w-full bg-[#EDEDED]"></div>
            <div className="grid gird-cols-1 gap-6">
                <div className="border-[#0A3C63] border-[3px] p-6 rounded-[16px]">
                    <AddressDetails />
                    <div className="flex items-center justify-end gap-4 mt-2">
                        <div className="size-[20px]">
                            <EditIcon />
                        </div>
                        <p className="text-[16px] text-[#2196F3] font-regular underline">تغییر جزییات</p>
                    </div>
                </div>
                <div className="border-[#CBCBCB] border-[1px] p-6 rounded-[16px]">
                    <AddressDetails />
                    <div className="flex items-center justify-end gap-4 mt-2">
                        <div className="size-[20px]">
                            <EditIcon />
                        </div>
                        <p className="text-[16px] text-[#2196F3] font-regular underline">تغییر جزییات</p>
                    </div>
                </div>
                <div className="border-[#CBCBCB] border-[1px] p-6 rounded-[16px]">
                    <AddressDetails />
                    <div className="flex items-center justify-end gap-4 mt-2">
                        <div className="size-[20px]">
                            <EditIcon />
                        </div>
                        <p className="text-[16px] text-[#2196F3] font-regular underline">تغییر جزییات</p>
                    </div>
                </div>
                <div className="border-[#CBCBCB] border-[1px] p-6 rounded-[16px]">
                    <AddressDetails />
                    <div className="flex items-center justify-end gap-4 mt-2">
                        <div className="size-[20px]">
                            <EditIcon />
                        </div>
                        <p className="text-[16px] text-[#2196F3] font-regular underline">تغییر جزییات</p>
                    </div>
                </div>
            </div>
        </div>
    )
};export default AllAddresses;