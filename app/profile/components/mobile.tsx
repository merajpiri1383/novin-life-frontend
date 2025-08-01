import MobileProducts from "@/app/components/mobileProducts";
import TickCircleIcon from "@/components/icons/profile/tickCircle";
import CloseCircleIcon from "@/components/icons/profile/closeCircle";
import MoreCircleIcon from "@/components/icons/profile/moreCircle";


const ProfileMobile = () => {
    return (
        <>

            <div>
                <p className="text-[#3D3D3D] font-bold text-[18px]">سفارشات من </p>
                <div className="grid grid-cols-3 gap-2 my-2">
                    <div className="col-span-1 flex items-start justify-start gap-2">
                        <div className="size-[20px]">
                            <CloseCircleIcon color="#2196F3" />
                        </div>
                        <div className="text-[#3D3D3D] font-regular text-[14px]">
                            <p>۲۱۵ سفارش</p>
                            <p>لغو شده</p>
                        </div>
                    </div>
                    <div className="col-span-1 flex items-start justify-start gap-2">
                        <div className="size-[20px]">
                            <MoreCircleIcon color="#2196F3" />
                        </div>
                        <div className="text-[#3D3D3D] font-regular text-[14px]">
                            <p>۴۵ سفارش</p>
                            <p>جاری</p>
                        </div>
                    </div>
                    <div className="col-span-1 flex items-start justify-start gap-2">
                        <div className="size-[20px]">
                            <TickCircleIcon color="#2196F3" />
                        </div>
                        <div className="text-[#3D3D3D] font-regular text-[14px]">
                            <p>۴۵ سفارش</p>
                            <p>ارسال شده</p>
                        </div>
                    </div>
                </div>
            </div>
            <MobileProducts 
                counts={[1,2]} 
                title="علاقه مندی های من" 
                className="mx-0"
            />
            <MobileProducts 
                counts={[1,2,3,4]} 
                title="خرید های پر تکرار من"
                className="mx-0"
            />
        </>
    )
};export default ProfileMobile;