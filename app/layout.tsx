import { FC } from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import "@/app/globals.css";
import ReactQueryProvider from "@/utils/providers/reactQuery";
import { ToastContainer } from "react-toastify";
const Header = dynamic(() => import("@/components/header"), { ssr: true });
const Footer = dynamic(() => import("@/components/footer"), { ssr: true });


const IranSansFont = localFont({
    src: "./fonts/IRANSansWeb(FaNum).ttf",
    display: "swap",
    variable: "--iran-sans-font"
})

export const metadata: Metadata = {
    title: "Novin Life",
}


interface RootLayoutProps {
    children: React.ReactNode,
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
    return (
        <html className="hide-scrollbar">
            <body className={IranSansFont.variable}>
                <ReactQueryProvider>
                    <Header />
                    {children}
                    <Footer />
                </ReactQueryProvider>
                <ToastContainer
                    draggable={true}
                />
            </body>
        </html>
    )
}; export default RootLayout;