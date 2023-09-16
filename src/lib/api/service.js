import axios from "axios";
import { getCookie } from "../cookie";

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

let config = {
    headers: {
        'Authorization': `Bearer ${getCookie('is_login')}`,
        'withCredentials': true,
    }
}

// 질문 내용 저장
export const saveCoverLetter = async (appId, question, answer, config) => {
    console.log({ appId, question, answer })
    return await axios.post(`${PROXY}/api/v1/application/${appId}/child`, { question: question, answer: answer }, config);
}

// 질문 리스트 조회
export const getCoverLetter = async (appId, config) => {
    return await axios.get(`${PROXY}/api/v1/application/${appId}/child/list`, config);
}

// 질문 내용 상세 조회
export const getPreQItem = async (appId, childId, config) => {
    return await axios.get(`${PROXY}/api/v1/application/${appId}/child/${childId}`, config)
}

// 예상 면접 질문 및 핵심 역량 조회 (답변 조회)
export const getPreQ = async (childId, config) => {
    return await axios.post(`${PROXY}/api/v1/preq/generate/${childId}`, {}, config)
}

// 새로운 지원서 저장
export const postNewApplication = async (config) => {
    return await axios.post(`${PROXY}/api/v1/application`, {}, config);
}

// 지원서 리스트 조회(질문, 답변)
export const getAllApplication = async (config) => {
    return await axios.get(`${PROXY}/api/v1/application/list`, config);
}

// 지원서 제목 저장
export const patchTitle = async (appId, title, config) => {
    return await axios.patch(`${PROXY}/api/v1/application/${appId}/title`, { title: title }, config);
}

// 지원서 설명 저장
export const patchMemo = async (appId, description, config) => {
    return await axios.patch(`${PROXY}/api/v1/application/${appId}/memo`, { memo: description }, config);
}

// 지원서 상세 조회
export const getApplicationDetail = async (appId, config) => {
    return await axios.get(`${PROXY}/api/v1/application/${appId}`, config);
}


