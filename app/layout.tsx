import { FC } from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "@/app/globals.css";
const Header = dynamic(() => import("@/components/header"),{ssr : true});


export const metadata : Metadata = {
    title : "Novin Life",
}


interface RootLayoutProps {
    children : React.ReactNode,
}

const RootLayout : FC<RootLayoutProps> = ({ children }) => {
    return (
        <html>
            <body>
                <Header />
                {children}
            </body>
        </html>
    )
};export default RootLayout;