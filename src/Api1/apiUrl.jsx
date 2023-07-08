import axios from "axios";

const url = 'http://127.0.0.1:3006';

export const getApiData = async (link) => {
    return await axios.get(`${url}/${link}`)
}