"use client"
import axios from "axios";
import Cookies from "next-cookies-universal";



const Api = axios.create({
    baseURL : "https://company.novinlife.com/api",
});export default Api;


Api.interceptors.request.use(async (config) => {
    const token = (await Cookies("client")).get("access_token");
    if (token) {
        config.headers.Authorization = "Bearer " + token;
    }
    return config;
})