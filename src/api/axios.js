import Vue from 'vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import axios from 'axios'
import store from '../store'

const config = {
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: "",
    withCredentials: true
}

const request = axios.create(config)

request.interceptors.request.use(config => {
    NProgress.start()
    console.log()
    if (store.state.user) {
        const token = store.state.user.token
        config.headers.Authorization = token // 让每个请求携带自定义 token 请根据实际情况自行修改
    }

    // if (token) {

    // }
    // config.headers.Authorization = window.sessionStorage.getItem('token')
    // 在最后必须 return config
    return config
})

request.interceptors.response.use(config => {
    NProgress.done()
    return config
})

export default request