import VerticalLine from "@/components/icons/home/verticalLine";

const Stats = () => {
    return (
        <div className="flex items-center justify-center [direction:rtl] gap-20 m-[80px]">
            <div>
                <p className="text-center text-[#3D3D3D] text-[64px]">+۵</p>
                <p className="text-center text-[#3D3D3D] text-[24px]">سال سابقه</p>
            </div>
            <div className="w-[2px] h-[200px]">
                <VerticalLine />
            </div>
            <div>
                <p className="text-center text-[#3D3D3D] text-[64px]">+۱۰</p>
                <p className="text-center text-[#3D3D3D] text-[24px]">همکاری</p>
            </div>
            <div className="w-[2px] h-[200px]">
                <VerticalLine />
            </div>
            <div>
                <p className="text-center text-[#3D3D3D] text-[64px]">+۲۰</p>
                <p className="text-center text-[#3D3D3D] text-[24px]">پشتیبانی فعال</p>
            </div>
            <div className="w-[2px] h-[200px]">
                <VerticalLine />
            </div>
            <div>
                <p className="text-center text-[#3D3D3D] text-[64px]">+۲۰۰</p>
                <p className="text-center text-[#3D3D3D] text-[24px]">سفارش موفق</p>
            </div>
        </div>
    )
}; export default Stats;