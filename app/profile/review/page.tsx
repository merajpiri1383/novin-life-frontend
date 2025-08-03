import Image from "next/image";
import TestImage from "@/public/dev/productImage1.png";
import StarIcon from "@/components/icons/home/star";


const Review = () => {
    return (
        <div>
            <div className="flex items-start justify-between">
                <div className="">
                    <p className="text-[#3D3D3D]">جا سیگاری هوشمند</p>
                    <p className="text-[#737373] font-regular text-[16px]">
                        میتونست قیمت بهتری داشته باشه ولی کلا خوبه من راضیم.</p>
                </div>
                <div className="flex items-start justify-center gap-4">
                    <div className="grid grid-cols-1 h-[160px] items-between">
                        
                        <div className="col-span-1 flex items-center h-fit gap-4 justify-center">
                            <span className="size-[5px] bg-[#009F0A]/46 rounded-full"></span>
                            <p className="text-[#009A0A]">تایید شده</p>
                        </div>
                        <div className="col-span-1 flex items-end justify-end">
                            <div className="size-[20px]">
                                <StarIcon color="#CBCBCB" />
                            </div>
                            <div className="size-[20px]">
                                <StarIcon color="#CBCBCB" />
                            </div>
                            <div className="size-[20px]">
                                <StarIcon />
                            </div>
                            <div className="size-[20px]">
                                <StarIcon />
                            </div>
                            <div className="size-[20px]">
                                <StarIcon />
                            </div>
                        </div>
                    </div>
                    <div className="w-[160px] h-[160px] relative ">
                        <Image
                            src={TestImage}
                            alt="test image"
                            fill={true}
                            sizes="100%"
                            className="rounded-[4px]"
                            style={{objectFit : "cover",objectPosition : "center"}}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

const Page = () => {

    const items = [1,2,3,4,5,6]

    return (
        <div className="grid grid-cols-1 gap-6">
            {
                items.map((item,index) => {
                    return (
                        <Review key={index} />
                    )
                })
            }
        </div>
    )
};export default Page;