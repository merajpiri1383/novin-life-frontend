import { FC } from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import "@/app/globals.css";
const Header = dynamic(() => import("@/components/header"), { ssr: true });


const IranSansFont = localFont({
    src: "./fonts/IRANSansWeb(FaNum).ttf",
    display : "swap",
    variable : "--iran-sans-font"
})

export const metadata: Metadata = {
    title: "Novin Life",
}


interface RootLayoutProps {
    children: React.ReactNode,
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
    return (
        <html>
            <body className={IranSansFont.variable}>
                <Header />
                {children}
            </body>
        </html>
    )
}; export default RootLayout;