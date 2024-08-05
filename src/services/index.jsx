import httpRequest, { post, get } from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const loginPost = async ({email,password}) => {
    try {
        const data = { email,password }; // Dữ liệu cần truyền vào
        const response = await post('login', data);       
    } catch (error) {
        console.error('Error posting data:', error);
    }
};
