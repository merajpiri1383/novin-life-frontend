"use client"
import React, { FC, useState } from "react";
import { Slide } from "react-awesome-reveal";
import StoryIcon from "@/components/icons/about/story";
import ArrowLeft2Icon from "@/components/icons/home/arrowLeft2";
import { Category, categories , type CategoryType , Faq } from "./faqs";



const CategoryFaqs : FC<{
    category : CategoryType,
    setCategory : React.Dispatch<React.SetStateAction<CategoryType | null>>
}> = ({ category , setCategory }) => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-[5]">
            <Slide direction="up" duration={450} triggerOnce>
                <div className="w-full h-screen bg-white p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start gap-[8px]">
                            <div className="size-[24px]">
                                {category.active_icon}
                            </div>
                            <p className="text-[#0A3C63] text-[18px] font-regular">{category.text}</p>
                        </div>
                        <div className="size-[24px] active:scale-110 transition cursor-pointer" 
                            onClick={() => setCategory(null)}>
                            <ArrowLeft2Icon color="#292D32" />
                        </div>
                    </div>
                    <div className="mt-6">
                        {
                            category.faqs?.map((faq,index) => {
                                return (
                                    <Faq 
                                        answer={faq.answer}
                                        question={faq.question}
                                        key={index}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </Slide>
        </div>
    )
}

const AboutMobile = () => {

    const [currentCategory,setCategory] = useState<CategoryType | null>(null);

    return (
        <div className="m-6 [direction:rtl]">
            <div className="flex items-center justify-between">
                <p className="text-[#3D3D3D] font-semibold text-[18px]">سوالات متداول</p>
                <div className="size-[24px]">
                    <StoryIcon />
                </div>
            </div>
            <div className="mt-6">
                {
                    categories.map((category, index) => {
                        return (
                            <Slide
                                direction="up"
                                duration={300}
                                key={index}
                                triggerOnce>
                                <div onClick={() => setCategory(category)}>
                                    <Category  {...category} />
                                </div>
                            </Slide>
                        )
                    })
                }
            </div>
            {
                currentCategory && <CategoryFaqs
                    category={currentCategory}
                    setCategory={setCategory}
                />
            }
        </div>
    )
}; export default AboutMobile;