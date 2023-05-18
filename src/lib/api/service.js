import axios from "axios";
import { getCookie } from "../cookie";

let config = {
    headers: {
        'Authorization': `Bearer ${getCookie('is_login')}`,
        'withCredentials': true,
    }
}

export const saveCoverLetter = async ({ question, answer }) => {
    return await axios.post('/api/v1/preq', { question: question, answer: answer }, config)
}

export const getCoverLetter = () => {
    let config = {
        headers: {
            'Authorization': `Bearer ${getCookie('is_login')}`,
            'withCredentials': true,
        }
    }
    return axios.get('/api/v1/preq/list', config)
}

export const getPreQ = ({ cletterId }) => {
    return axios.get(`/api/v1/preq/${cletterId}`, config)
}