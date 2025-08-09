"use clinet"
import { create } from "zustand";
import { persist } from "zustand/middleware";


type userType = {
    phone : string,
}

interface userStoreType {
    user : userType | null , 
    setUser : (user : userType) => void,
    clearUser : () => void,
}

const useUserStore = create<userStoreType>()(
    persist(
        (set) => ({
            user : null,
            setUser : (user) => set({user}),
            clearUser : () => set({user : null})
        }),
        {
            name : "user-store"
        }
    )
);export default useUserStore;