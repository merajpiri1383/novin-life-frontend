"use client"
import dynamic from "next/dynamic";
import { useQuery } from "@tanstack/react-query";
import { GetMainPage } from "@/api/main";
import "@/app/components/style.css";
import useDevice from "@/hooks/useDevice";

const Slider = dynamic(() => import("@/app/components/slider"), { ssr: true });
const Stats = dynamic(() => import("@/app/components/stats"), { ssr: true });
const MostSell = dynamic(() => import("@/app/components/mostSell"), { ssr: true });
const Newest = dynamic(() => import("@/app/components/mostSell"), { ssr: true });
const SpecialSell = dynamic(() => import("@/app/components/specialSell"), { ssr: true });
// const MostVisit = dynamic(() => import("@/app/components/mostVisit"), { ssr: true });
const BannerGift = dynamic(() => import("@/app/components/bannerGift"), { ssr: true });
const Blogs = dynamic(() => import("@/app/components/blogs"), { ssr: true });
const ProductCategories = dynamic(() => import("@/app/components/productCategories"), { ssr: false });
const MobileProducts = dynamic(() => import("@/app/components/mobileProducts"), { ssr: false });

const Page = () => {

    const device = useDevice();
    const { data } = useQuery({
        queryKey: ["main-page"],
        queryFn: GetMainPage
    });

    return (
        <>
            {
                device === "desktop" ?
                    <>
                        <Slider />
                        <Stats />
                        {
                            data?.output?.bestseller && <MostSell
                                data={data.output.bestseller}
                            />
                        }
                        <SpecialSell />
                        {
                            data?.output?.bestseller && <Newest
                                data={data.output.newest}
                            />
                        }
                        {/* <MostVisit /> */}
                        <BannerGift />
                        <Blogs />
                    </> :
                    <>
                        <Slider />
                        <ProductCategories />
                        {/* <MobileProducts
                            counts={[1, 2, 3, 4]}
                            title="طرح های پرطرفدار"
                        /> */}
                        <SpecialSell />
                        {
                            data?.output?.bestseller && <MobileProducts
                                products={data.output.newest}
                                title="محصولات جدید"
                            />
                        }
                    </>

            }
        </>
    )
}; export default Page;