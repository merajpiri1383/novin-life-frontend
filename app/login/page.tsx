import { Slide } from "react-awesome-reveal";


const Page = () => {
    return (
        <Slide direction="up" duration={300} triggerOnce>
            <div className="border border-[#EDEDED] rounded-[8px] p-6 w-[60%] mx-auto">
                <p className="text-[#3D3D3D] font-medium text-[28px]">ورود | ثبت‌نام</p>
                <div className="my-6">
                    <p className="text-[#3D3D3D] font-medium text-[14px]">
                        لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
                    <input
                        type="text"
                        className="border-[#ADADAD] border-[1px] rounded-[8px] w-full my-1
                    text-[#ADADAD] p-2 text-[14px] outline-none"
                        placeholder="*********09 یا Example@gmail.com"
                    />
                </div>
                <div className="py-[8px] px-[20px] flex items-center justify-center bg-[#0A3C63] rounded-[8px]
                cursor-pointer">
                    <p className="text-center text-[#FFFFFF] font-medium text-[16px]">ادامه</p>
                </div>
            </div>
        </Slide>
    )
}; export default Page;