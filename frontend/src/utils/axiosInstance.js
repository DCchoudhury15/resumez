import axios from 'axios'
import { BASE_URL } from './apiPaths'

const axiosInstance=axios.create({
    baseURL:BASE_URL,
    timeout:1000,
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
    }
})


axiosInstance.interceptors.request.use(
    (config)=>{
        const accessToken = localStorage.getItem('token')
            if(accessToken){
                config.headers.Authorization=`Bearer ${accessToken}`
            }
            return config;
    },
    (error)=>{
        return Promise.reject(error)
    }
)



axiosInstance.interceptors.response.use(
    (response)=>{
        return response;
    },
    (error)=>{
        if(error.response.status===401){
            window.location.href='/'
        }
    else if(error.response.status===500){
        console.error("Server Error")
    
}else if(error.code === 'ECONNABRATED'){
    console.error("Request timeout")
}
return Promise.reject(error)
}
)

export default axiosInstance;