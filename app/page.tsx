import dynamic from "next/dynamic";
import "@/app/components/style.css";

const Slider = dynamic(() => import("@/app/components/slider"),{ssr : true});
const Stats = dynamic(() => import("@/app/components/stats"),{ssr : true});
const MostSell = dynamic(() => import("@/app/components/mostSell"),{ssr : true});

const Page = () => {
    return (
        <>
            <Slider />
            <Stats />
            <MostSell />
        </>
    )
};export default Page;