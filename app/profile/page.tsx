import dynamic from "next/dynamic";

const UserInfo = dynamic(() => import("@/app/profile/components/userInfo"),{ssr : true});

const Page = () => {
    return (
        <div className="px-[80px] py-[30px] [direction:rtl]">
            <p className="text-[#3D3D3D] font-bold text-[32px]">پروفایل</p>
            <div className="grid grid-cols-3 my-3 items-start">
                <div className="col-span-1">
                    <UserInfo />
                </div>
                <div className="col-span-2"></div>
            </div>
        </div>
    )
};export default Page;