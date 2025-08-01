import SmsIcon from "@/icons/footer/sms"


const NewsInput = () => {
    return (
        <>
            <p className="mt-6 text-[#FFFFFF] font-bold text-[14px] md:block hidden">خبرنامه نوین لایف</p>
            <p className="md:block text-[#FFFFFF] font-bold text-[14px] mt-6 md:hidden">خبرنامه</p>
            <div className="border-[1px] rounded-[8px] border-[#EDEDED] md:border-[#868686] 
                        p-[6px] my-2 flex items-center justify-start gap-2">
                <div className="aspect-square w-[30px] md:block hidden">
                    <SmsIcon />
                </div>
                <div className="aspect-square w-[30px] md:hidden">
                    <SmsIcon color="#EDEDED" />
                </div>
                <input
                    type="text"
                    placeholder="ایمیل خود را وارد کنید..."
                    className="w-full md:text-[#868686] md:placeholder-[#868686] font-bold text-[12px] outline-none
                        placeholder-[#EDEDED] text-[#EDEDED]"
                />
                <div className="bg-[#03A9F4] rounded-[4px] py-[5px] px-[13px]">
                    <p className="text-[#FFFFFF] text-[14px] font-bold">ثبت</p>
                </div>
            </div>
        </>
    )
};export default NewsInput;