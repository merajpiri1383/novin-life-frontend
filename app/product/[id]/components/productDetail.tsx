import Image from "next/image";
import StarIcon from "@/components/icons/home/star";
import ProductImage1 from "@/public/dev/productImage1.png";
import ProductImage2 from "@/public/dev/productImage2.png";
import ProductImage3 from "@/public/dev/productImage3.png";
import ProductImage4 from "@/public/dev/productImage4.png";
import ProductImage5 from "@/public/dev/productImage5.png";
import ProductImage6 from "@/public/dev/productImage6.png";


const ProductDetail = () => {
    return (
        <div className="grid grid-cols-2 gap-6">
            <div className="col-span-1">
                <div className="w-full h-[380px] relative">
                    <Image
                        src={ProductImage1}
                        alt="product image 1"
                        fill={true}
                        sizes="100%"
                        className="rounded-[8px]"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                </div>
                <div className="grid grid-cols-6 my-4">
                    <div className="col-span-1">
                        <div className="relative size-[80px]">
                            <Image
                                src={ProductImage2}
                                alt="product image2"
                                fill={true}
                                sizes="100%"
                                className="rounded-[8px] border-[#CBCBCB] border-[1px]"
                                style={{objectFit : "cover",objectPosition : "center"}}
                            />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="relative size-[80px]">
                            <Image
                                src={ProductImage3}
                                alt="product image2"
                                fill={true}
                                sizes="100%"
                                className="rounded-[8px] border-[#CBCBCB] border-[1px]"
                                style={{objectFit : "cover",objectPosition : "center"}}
                            />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="relative size-[80px]">
                            <Image
                                src={ProductImage4}
                                alt="product image2"
                                fill={true}
                                sizes="100%"
                                className="rounded-[8px] border-[#CBCBCB] border-[1px]"
                                style={{objectFit : "cover",objectPosition : "center"}}
                            />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="relative size-[80px]">
                            <Image
                                src={ProductImage5}
                                alt="product image2"
                                fill={true}
                                sizes="100%"
                                className="rounded-[8px] border-[#CBCBCB] border-[1px]"
                                style={{objectFit : "cover",objectPosition : "center"}}
                            />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="relative size-[80px]">
                            <Image
                                src={ProductImage6}
                                alt="product image2"
                                fill={true}
                                sizes="100%"
                                className="rounded-[8px] border-[#CBCBCB] border-[1px]"
                                style={{objectFit : "cover",objectPosition : "center"}}
                            />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="size-[80px] rounded-[8px] border-[0.46px] border-[#0A3C63]
                            flex items-center justify-center">
                            <p className="font-bold text-[12px] text-[#0A3C63] text-center"
                            >4+ تصاویر بیشتر</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1">
                <div className="flex items-center justify-between">
                    <p className="text-[#3D3D3D] font-medium text-[28px]">XIAOMI Headset</p>
                    <div className="flex items-center justify-center bg-[#E9F3FB] rounded-[4px]
                        px-[8px] py-[4px] gap-[8px]">
                            <div className="size-[24px]">
                                <StarIcon />
                            </div>
                            <p className="text-[#3D3D3D] text-[16px]">3.2</p>
                        </div>
                </div>
                <p className="text-[#868686] text-[14px] font-regular my-4">هدست شیاومی</p>
                <p className="text-[#032340] text-[32px] font-regular my-4">۶۰۰,۰۰۰ تومان</p>
                <div className="flex items-center justify-start gap-[40px] my-2">
                    <p className="text-[#D6D6D6] font-medium text-[24px] line-through">1,200,000 </p>
                    <div className="bg-[#F44336] rounded-[8px] px-[16px] py-[8px]">
                        <p className="text-[#FFFFFF] font-bold text-[16px]">50%</p>
                    </div>
                </div>
                <div className="my-4">
                    <p className="font-medium text-[24px] text-[#3D3D3D]">سایز</p>
                    <div className="grid grid-cols-3 my-2 w-fit gap-[8px]">
                        <div className="bg-[#EDEDED] w-[78px] flex items-center justify-center
                            h-[24px] text-center col-span-1 text-[12px] rounded-[4px]">38</div>
                        <div className="bg-[#EDEDED] w-[78px] flex items-center justify-center
                            h-[24px] text-center col-span-1 text-[12px] rounded-[4px]">39</div>
                        <div className="bg-[#EDEDED] w-[78px] flex items-center justify-center
                            h-[24px] text-center col-span-1 text-[12px] rounded-[4px]">41</div>
                        <div className="bg-[#EDEDED] w-[78px] flex items-center justify-center
                            h-[24px] text-center col-span-1 text-[12px] rounded-[4px]">36</div>
                        <div className="bg-[#EDEDED] w-[78px] flex items-center justify-center
                            h-[24px] text-center col-span-1 text-[12px] rounded-[4px]">37</div>
                    </div>
                </div>
                <div className="my-4">
                    <p className="font-medium text-[24px] text-[#3D3D3D]">رنگ</p>
                    <div className="flex items-center justify-start my-2 gap-[16px]">
                        <div className="flex items-center justify-center p-[4px] gap-[8px]
                            border-[#2196F3] border-[1px] rounded-[4px] bg-[#2196F3]/10">
                            <div className="size-[24px] bg-[#C4A97C] rounded-full"></div>
                            <p className="font-medium text-[12px] text-[#3D3D3D]">خاکی</p>
                        </div>
                        <div className="flex items-center justify-center p-[4px] gap-[8px]
                            ">
                            <div className="size-[24px] bg-[#FFB300] rounded-full"></div>
                            <p className="font-medium text-[12px] text-[#3D3D3D]">زرد</p>
                        </div>
                        <div className="flex items-center justify-center p-[4px] gap-[8px]
                            ">
                            <div className="size-[24px] bg-[#541A47] rounded-full"></div>
                            <p className="font-medium text-[12px] text-[#3D3D3D]">بنفش</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}; export default ProductDetail;