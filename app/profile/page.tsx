import dynamic from "next/dynamic";
const Content = dynamic(() => import("@/app/profile/components/content"), { ssr: true });

const Page = () => {
    return (
        <Content />
    )
}; export default Page;