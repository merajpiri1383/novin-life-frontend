"use client"
import Image from "next/image";
import { Swiper , SwiperSlide } from "swiper/react";
import BloggerIcon from "@/components/icons/home/blogger";
import BlogImage from "@/public/dev/blog1.png";
import LeftArrowCircle from "@/components/icons/home/leftArrowCircle";


const Blog = () => {
    return (
        <div className="col-span-1 border-[#CBCBCB] border-[1px] rounded-[16px]">
            <div className="w-full h-[307px] relative">
                <Image 
                    src={BlogImage}
                    alt="blog image"
                    fill={true}
                    sizes="100%"
                    className="rounded-t-[16px]"
                    style={{objectFit : "cover",objectPosition : "center"}}
                />
            </div>
            <p className="text-[#01070D] font-bold text-[16px] m-4">عنوان خبر</p>
            <p className="text-[#01070D] text-[16px] m-4">متن خبر بلاگ</p>

            <div className="bg-[#06425D] flex items-center justify-center w-fit m-4 py-[8px] gap-[8px] px-[20px] rounded-[8px]">
                <div className="size-[24px]">
                    <LeftArrowCircle />
                </div>
                <p className="text-[#FFFFFF] text-[16px] font-bold">مشاهده خبر</p>
            </div>
        </div>
    )
};

const Blogs = () => {
    return (
        <div className="my-[30px] mx-[80px] [direction:rtl]">
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-[8px]">
                    <div className="size-[40px]">
                        <BloggerIcon />
                    </div>
                    <p className="text-[#3D3D3D] font-bold text-[24px]">بلاگ نوین لایف</p>
                </div>
                <div className="w-[70%] bg-[#E9E9E9] h-[1px]"></div>
                <p className="text-[#2196F3] text-[16px]">مشاهده بیشتر</p>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={60}
                className="my-[35px]"
            >
                <SwiperSlide>
                    <div className="grid grid-cols-2 gap-[35px]">
                        <Blog />
                        <Blog />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid grid-cols-2 gap-[35px]">
                        <Blog />
                        <Blog />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid grid-cols-2 gap-[35px]">
                        <Blog />
                        <Blog />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}; export default Blogs;