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

    const companyStore = useCompanyStore();


    useEffect(() => {

        if (data?.output.footer) {
            companyStore.setFooter(data?.output.footer);
        }

        if (data?.output.header) {
            companyStore.setHeader(data.output.header);
        }

        if (data?.output.theme) {
            companyStore.setTheme(data.output.theme);
        }
    }, [data,companyStore]);

    return (
        children
    )
}; export default Auth;