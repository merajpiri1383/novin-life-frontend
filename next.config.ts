import type { NextConfig } from "next";


const nextConfig : NextConfig = {
    "images" : {
        "remotePatterns" : [
            {
                hostname : "company.novinlife.com",
                protocol : "https",
            }
        ]
    },
};export default nextConfig;