import axios from 'axios';



const httpRequest = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});

export const get = async (path) => {   
    if (sessionStorage.getItem('token')) {        
        const response = await httpRequest.get(path, {
            headers: `Authorization: Bearer ${JSON.parse(sessionStorage.getItem('token')).access_token}`,
            withCredentials: true
        });
        return response.data;
    }
    return null;
    
};

export const post = async (path, data ) => {
    if (sessionStorage.getItem('token')) {        
        const response = await httpRequest.post(path,data, {
            headers: `Authorization: Bearer ${JSON.parse(sessionStorage.getItem('token')).access_token}`,
            withCredentials: true
        });
        return response.data;
    }
    return null;
};

export default httpRequest;
