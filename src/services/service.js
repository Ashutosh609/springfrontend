import axios from "axios";
import dotenv from "dotenv";
import Cookies from "js-cookie";

dotenv.config({ path: './config.env' });

const resapi=process.env.resapi;

class fitservice {

    async postregister(data){
        return await axios.post(resapi+'register',data);
    }

    async postsignin(data){
        console.log(data)
        return await axios.post(resapi+'signin',data)
    }

    async getsigninout(){
        return await axios.get(resapi+'signout')
    }

    async getauth(){
        const Usercok = Cookies.get("user");
            if (Usercok !== undefined){
                const authAxios = axios.create({
                    baseURL: resapi,
                    headers:{
                        Authorization: `Bearer ${Usercok}`
                    }

                })
                const data={jwt:Usercok};
        return await authAxios.post('auth',data)
    }}
}

export default new fitservice();