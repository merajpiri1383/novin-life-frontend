import Image from "next/image";
import NotFoundImage from "@/public/not-found.svg";

const Page = () => {
    return (
        <div className=" flex items-center justify-center">
            <div>
                <div className="size-[447px] relative">
                    <Image 
                        src={NotFoundImage}
                        alt="not found"
                        fill={true}
                        sizes="100%"
                        style={{objectFit : "cover",objectPosition : "center"}}
                    />
                </div>
                <p className="my-10 text-center text-[#3D3D3D] font-semibold text-[24px]
                ">متاسفانه صفحه مورد نظر پیدا نشد </p>
            </div>
        </div>
    )
};export default Page;