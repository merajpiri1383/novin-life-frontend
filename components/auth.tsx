"use client"
import { GetCompany } from "@/app/api/company";
import { useQuery } from "@tanstack/react-query";
import { FC, useEffect } from "react";
import { CompanyType } from "@/components/types";
import { useCompanyStore } from "@/lib/store/company";



const Auth: FC<{ children: React.ReactNode }> = ({ children }) => {

    const { data }: { data: CompanyType } = useQuery({
        queryKey: ["company"],
        queryFn: GetCompany,
    });

    const { setFooter, setHeader, setTheme } = useCompanyStore();

    useEffect(() => {

        try {
            if (data?.output.footer) {
                setFooter(data?.output.footer);
            }
        } catch { }

        try {
            if (data?.output.header) {
                setHeader(data.output.header);
            }
        } catch { }

        try {
            if (data?.output.theme) {
                setTheme(data.output.theme);
            }
        } catch {}
    }, [data]); // Remove setFooter, setHeader, setTheme from dependencies

    return (
        children
    )
}; export default Auth;