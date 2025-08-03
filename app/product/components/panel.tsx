import ArrowDownIcon from "@/components/icons/profile/arrowDown";


const Panel = () => {
    return (
        <div className="border-[1px] border-[#EDEDED] rounded-[8px] p-4">
            <div className="my-2 flex items-center justify-between">
                <p className="text-[#3D3D3D] font-semibold text-[14px]">فیلتر ها </p>
                <p className="text-[#F44336] font-semibold text-[12px]">حذف فیلترها</p>
            </div>

            <div className="my-3 border-b border-[#EDEDED] flex items-center justify-between pb-2">
                <p className="text-[#3D3D3D] font-regular text-[14px]">برند</p>
                <div className="size-[16px]">
                    <ArrowDownIcon color="#3D3D3D" />
                </div>
            </div>

            <div className="my-3 border-b border-[#EDEDED] flex items-center justify-between pb-2">
                <p className="text-[#3D3D3D] font-regular text-[14px]">اندازه</p>
                <div className="size-[16px]">
                    <ArrowDownIcon color="#3D3D3D" />
                </div>
            </div>

            <div className="my-3 border-b border-[#EDEDED] flex items-center justify-between pb-2">
                <p className="text-[#3D3D3D] font-regular text-[14px]">رنگ</p>
                <div className="size-[16px]">
                    <ArrowDownIcon color="#3D3D3D" />
                </div>
            </div>

            <div className="my-3 border-b border-[#EDEDED] flex items-center justify-between pb-2">
                <p className="text-[#3D3D3D] font-regular text-[14px]">فقط کالاهای موجود</p>
                <div className="h-[20px] w-[40px] border-[1px] border-[#EDEDED] rounded-full
                                flex items-center justify-end p-[2px]">
                    <div className="size-[16px] bg-[#3D3D3D] rounded-full"></div>
                </div>
            </div>

            <div className="my-3 border-b border-[#EDEDED] flex items-center justify-between pb-2">
                <p className="text-[#3D3D3D] font-regular text-[14px]">محدوده قیمت</p>
                <div className="size-[16px]">
                    <ArrowDownIcon color="#3D3D3D" />
                </div>
            </div>
        </div>
    )
}; export default Panel;