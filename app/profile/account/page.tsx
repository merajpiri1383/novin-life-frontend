


const Page = () => {
    return (
        <div className="border-[1px] border-[#EDEDED] rounded-[16px] p-[25px]">
            <div className="pb-4 border-b border-[#EDEDED]">
                <p className="text-[#3D3D3D] font-bold text-[24px]">اطلاعات حساب کاربری</p>
            </div>
            <div className="mx-[80px] my-[30px] grid grid-cols-2 gap-[25px]">
                <div className="col-span-1">
                    <p className="text-[#CBCBCB] text-[14px]">نام و نام خانوادگی </p>
                    <input 
                        type="text"
                        className="w-full text-[16px] outline-none rounded-[8px] py-[6px] px-[8px]
                            border border-[#CBCBCB] mt-2"
                    />
                </div>
                <div className="col-span-1">
                    <p className="text-[#CBCBCB] text-[14px]">آدرس ایمیل</p>
                    <input 
                        type="text"
                        className="w-full text-[16px] outline-none rounded-[8px] py-[6px] px-[8px]
                            border border-[#CBCBCB] mt-2"
                    />
                </div>
            </div>
        </div>
    )
};export default Page;