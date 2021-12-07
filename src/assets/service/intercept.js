import axios from 'axios'

const HOST = 'http://localhost:3000'
//  创建axios实例
export function request (config) {
    const instance = axios.create({
        baseURL: HOST
    })
    instance.interceptors.response.use(
        response => {
            return response.data
        }
    )
    return instance(config)
}
