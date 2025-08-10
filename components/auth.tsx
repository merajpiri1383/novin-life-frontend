"use client"
import { GetCompany } from "@/app/api/company";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";


const Auth: FC<{ children: React.ReactNode }> = ({ children }) => {

    const { data } = useQuery({
        queryKey: ["company"],
        queryFn: GetCompany,
    });

    console.log(data)

    return (
        children
    )
}; export default Auth;