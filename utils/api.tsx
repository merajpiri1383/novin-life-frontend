import axios from "axios";


const Api = axios.create({
    baseURL : "https://company.novinlife.com/api",
});export default Api;