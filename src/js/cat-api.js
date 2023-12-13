import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_cNyjISVs1MLXg21zyo3c8W3FVMoEuDt9sffQhFusob9TJiD893KhgDU2b6rmiDyG";

export function fetchBreeds(){
    const BASE_URL = 'https://api.thecatapi.com/v1';
    const END_POINT = '/breeds';

    const url = `${BASE_URL}${END_POINT}`;
    return  axios.get(url);
};

export function fetchCatByBreed(breedId) {
    const BASE_URL = 'https://api.thecatapi.com/v1';
    const END_POINT = '/image/search';
    const params = {
        params: { breed_ids: breedId },
    };

    const url = `${BASE_URL}${END_POINT}`;
    return  axios.get(url, params);
};
