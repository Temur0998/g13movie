import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: '30'
    },
    headers: {
        'x-rapidapi-key': '1d68ff7fb1mshda5554d9d91ef9cp1a06b7jsn56799ac1c101',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
};

export const ApiServise = {
    async fetching(url) {
        const response = await axios.request(`${BASE_URL}/${url}`, options);
        return response.data
    }
};

