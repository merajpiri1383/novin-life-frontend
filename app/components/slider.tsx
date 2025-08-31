"use client"
import Image from "next/image";
import { FC, useRef } from "react";
import { Slide } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import 'swiper/css/pagination';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import LeftArrowIcon from "@/components/icons/home/leftArrow";
import RightArrowIcon from "@/components/icons/home/rightArrow";
import { useQuery } from "@tanstack/react-query";
import { getSliders } from "@/api/slider";
import Link from "next/link";

type ImageType = {
    file_name?: string,
    id?: number,
    mime_type?: string,
    name?: string,
    original_url?: string,
    size?: number,
    uuid?: string,
}

type SlideType = {
    active?: boolean,
    company_id: number,
    created_at: string,
    id: number,
    image: ImageType,
    name: string,
    updated_at: string,
    url: string,
}


const SwiperImageSlide: FC<SlideType> = (props) => {
    return (
        <Link href={props.url ? props.url : "/"} target="_blank">
            <div className="relative my-2 md:my-0 h-[169px] md:h-[500px] w-full">
                {
                    props.image.original_url && <Image
                        src={props.image.original_url}
                        alt={props.name}
                        fill={true}
                        sizes="100%"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                }
            </div>
        </Link>
    )
}


const Slider = () => {

    const swiperRef = useRef<SwiperType | null>(null);

    const { data, isLoading } = useQuery({
        queryFn: getSliders,
        queryKey: ["sliders",]
    });


    return (
        <div>
            {
                isLoading ?
                    <div className="m-6 md:mx-[80px] h-[169px] md:h-[500px]">
                        <Skeleton height={"100%"}  />
                    </div>    :
                    <Slide direction="up" duration={300} triggerOnce>
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
                            {
                                data?.map((slide: SlideType) => {
                                    return (
                                        <SwiperSlide key={slide.id}>
                                            <SwiperImageSlide
                                                {...slide}
                                            />
                                        </SwiperSlide>
                                    )
                                })
                            }

                            <div className="left-20 size-[24px] absolute top-[50%] z-[2] 
                                -translate-y-[50%] cursor-pointer"
                                onClick={() => swiperRef?.current?.slidePrev()}>
                                <LeftArrowIcon />
                            </div>

                            <div className="right-20 size-[24px] absolute top-[50%] z-[2] 
                                -translate-y-[50%] cursor-pointer"
                                onClick={() => swiperRef?.current?.slideNext()}>
                                <RightArrowIcon />
                            </div>
                        </Swiper>
                    </Slide>
            }
        </div>
    )
}; export default Slider;