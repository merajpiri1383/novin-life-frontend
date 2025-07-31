"use client"
import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import 'swiper/css/pagination';
import SlideImage from "@/public/dev/slider.png";
import LeftArrowIcon from "@/components/icons/home/leftArrow";
import RightArrowIcon from "@/components/icons/home/rightArrow";


const SwiperImageSlide = () => {
    return (
        <div className="relative my-2 md:my-0 h-[169px] md:h-[500px] w-full">
            <Image 
                src={SlideImage}
                alt="slider image"
                fill={true}
                sizes="100%"
                style={{objectFit : "cover",objectPosition : "center"}}
            />
        </div>
    )
}


const Slider = () => {

    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={120}
                autoplay={{ delay: 3000 }}
                className="relative"
                loop={true}
                onSwiper={(swiper) => { swiperRef.current = swiper }}
                modules={[Autoplay, Pagination]}
                pagination
            >
                <SwiperSlide><SwiperImageSlide /></SwiperSlide>
                <SwiperSlide><SwiperImageSlide /></SwiperSlide>
                <SwiperSlide><SwiperImageSlide /></SwiperSlide>
                <SwiperSlide><SwiperImageSlide /></SwiperSlide>
                <SwiperSlide><SwiperImageSlide /></SwiperSlide>

                <div className="left-20 size-[24px] absolute top-[50%] z-[2] -translate-y-[50%] cursor-pointer"
                    onClick={() => swiperRef?.current?.slidePrev()}>
                        <LeftArrowIcon />
                    </div>

                <div className="right-20 size-[24px] absolute top-[50%] z-[2] -translate-y-[50%] cursor-pointer"
                    onClick={() => swiperRef?.current?.slideNext()}>
                        <RightArrowIcon />
                    </div>
            </Swiper>
        </div>
    )
}; export default Slider;