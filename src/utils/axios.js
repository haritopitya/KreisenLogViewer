import axios from 'axios';

export const getAxios = () => {
    const baseURL = './'
    
    return axios.create({
        baseURL: baseURL,
        timeout: 60000,
        responseType:'json'
    })
}