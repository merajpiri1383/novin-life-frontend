import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FooterType, HeaderType } from "@/components/types";


interface CompanyStoreType {
    footer: FooterType,
    header: HeaderType[],
    theme: string,
    setFooter: (data: FooterType) => void,
    setHeader: (data: HeaderType[]) => void,
    setTheme: (data: string) => void,
}


export const useCompanyStore = create<CompanyStoreType>()(
    persist(
        (set) => ({
            footer: {
                license: [],
                quickAccess: [],
                socialMedia: [],
                text: "",
            },
            header: [],
            theme: "",
            setFooter: (data: FooterType) => set({ footer: data }),
            setHeader: (data: HeaderType[]) => set({ header: data }),
            setTheme: (data: string) => set({ theme: data }),
        }),
        {
            name: "company-store",
        },
    )
)