import axios from "axios";

const API_KEY = process.env.REACT_APP_API_TOKEN;

const api = axios.create({
    baseURL: process.env.REACT_APP_MOVIE,
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
});

axios.interceptors.request.use(function (config) {
    // 요청이 전달되기 전에 작업 수행
    return config;
}, function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
});

axios.interceptors.request.use(function (response) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
}, function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    return Promise.reject(error);
});

export default api;