import Image from "next/image";
import Link from "next/link";
import BlogImage from "@/public/dev/blog1.png";
import CalendarIcon from "@/components/icons/blog/calendar";
import ArrowLeftCircleIcon from "@/components/icons/blog/arrowLeftCircle";
import ArrowRightCircleIcon from "@/components/icons/blog/arrowRightCircle";


const Blog = () => {
    return (
        <div className="rounded-[8px] col-span-1 border-[1px] border-[#EDEDED]">
            <div className="relative h-[211px] md:h-[227px] w-full">
                <Image
                    src={BlogImage}
                    alt="blog demo image"
                    draggable={false}
                    fill={true}
                    sizes="100%"
                    className="rounded-t-[8px]"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
            </div>
            <p className="text-[#3D3D3D] font-medium text-[14px] md:text-[16px] p-4">
                آیا از وجود این محصولات عجیب؛ اما کاربردی شیائومی خبر دارید؟</p>
            <div className="flex items-center justify-between px-4 pb-4">
                <div className="flex items-center justify-center gap-2">
                    <div className="size-[16px] hidden md:block">
                        <CalendarIcon />
                    </div>
                    <div className="size-[16px] md:hidden">
                        <CalendarIcon color="#2196F3" />
                    </div>
                    <p className="text-[#2196F3] md:text-[#5B5B5B] font-regular text-[12px]">
                        تاریخ: 25 تیر 1404</p>
                </div>
                <Link href={"/blog/2"} 
                    className="bg-[#F0F7FC] md:bg-[#F0F7FC] rounded-[12px] px-4 py-2">
                    <p className="text-[#2196F3] md:text-[#5B5B5B] font-semibold text-[16px]">ادامه مطلب</p>
                </Link>
            </div>
        </div>
    )
}

const Page = () => {

    const blogs = [1, 2, 3, 4, 5, 6];

    return (
        <section className="[direction:rtl] p-6 md:px-[80px] mb-12">
            <p className="text-[#3D3D3D] font-bold text-[18px] md:text-[32px]">بلاگ</p>
            <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-[32px]">
                {
                    blogs.map((blog, index) => {
                        return (
                            <Blog key={index} />
                        )
                    })
                }
            </div>
            <div className="my-12 flex items-center justify-center gap-4">
                <div className="size-[24px] cursor-pointer active:scale-95 hover:scale-110 transition">
                    <ArrowRightCircleIcon />
                </div>
                <div className="rounded-[24px] flex items-center justify-center gap-4 
                    border border-[#EDEDED] py-2 px-8">
                    <div className="border-[1px] border-[#656565] rounded-full size-[32px]
                        flex items-center justify-center">
                        <p className="text-[15px] font-regular text-[#3D3D3D]">1</p>
                    </div>
                    <div className="bg-[#E9F3FB] rounded-full size-[32px]
                        flex items-center justify-center">
                        <p className="text-[15px] font-regular text-[#3D3D3D]">2</p>
                    </div>
                    <div className="border-[1px] border-[#656565] rounded-full size-[32px]
                        flex items-center justify-center">
                        <p className="text-[15px] font-regular text-[#3D3D3D]">3</p>
                    </div>
                    <div className="border-[1px] border-[#656565] rounded-full size-[32px]
                        flex items-center justify-center">
                        <p className="text-[15px] font-regular text-[#3D3D3D]">4</p>
                    </div>
                    <div className="border-[1px] border-[#656565] rounded-full size-[32px]
                        flex items-center justify-center hidden md:block">
                        <p className="text-[15px] font-regular text-[#3D3D3D]">5</p>
                    </div>
                    <div className="border-[1px] border-[#656565] rounded-full size-[32px]
                        flex items-center justify-center hidden md:block">
                        <p className="text-[15px] font-regular text-[#3D3D3D]">6</p>
                    </div>
                    <div className="border-[1px] border-[#656565] rounded-full size-[32px]
                        flex items-center justify-center hidden md:block">
                        <p className="text-[15px] font-regular text-[#3D3D3D]">7</p>
                    </div>
                    <div className="border-[1px] border-[#656565] rounded-full size-[32px]
                        flex items-center justify-center hidden md:block">
                        <p className="text-[15px] font-regular text-[#3D3D3D]">8</p>
                    </div>
                    <div className="border-[1px] border-[#656565] rounded-full size-[32px]
                        flex items-center justify-center hidden md:block">
                        <p className="text-[15px] font-regular text-[#3D3D3D]">9</p>
                    </div>
                    <div className="size-[32px]
                        flex items-center justify-center">
                        <p className="text-[15px] font-regular text-[#3D3D3D]">...</p>
                    </div>
                    <div className="border-[1px] border-[#656565] rounded-full size-[32px]
                        flex items-center justify-center">
                        <p className="text-[15px] font-regular text-[#3D3D3D]">50</p>
                    </div>
                </div>
                <div className="size-[24px] cursor-pointer active:scale-95 hover:scale-110 transition">
                    <ArrowLeftCircleIcon />
                </div>
            </div>
        </section>
    )
}; export default Page;