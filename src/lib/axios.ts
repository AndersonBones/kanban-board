import axios from 'axios'

export const clientAxios = axios.create({
    baseURL:"/api"
})

export const serverAxios = axios.create({
    baseURL: process.env.SERVER_BASE_URL
})