import {
    MessageBox,
    Message
} from 'element-ui'
import axios from './axios'
import Vue from 'vue'
import MessageList from '../static/MessageList'

const responesMessage = (data, config, resolve, reject) => {
    if (+data.status === 200 || data.access_token) {
        resolve(data)
    } else {
        if (!(config && config.noEnd)) {
            MessageBox.alert(MessageList[data.code] || data.message || '系统异常')
        }
        reject(data)
    }
}

const alertMessage = (config, reject, error) => {
    if (config && config.noEnd) {
        reject(error)
        return false
    }
    switch (error.response && error.response.status) {
        case 404:
            // MessageBox.alert('接口异常', MESSAGE_TITLE)
            Message.error('接口异常')
            break
        case 403:
            MessageBox.alert('没有权限，请刷新重试')
                .then(() => {
                    router.push('/')
                })
            break
        case 401:
            store.dispatch('user/resetToken').then(() => {
                MessageBox.alert('当前未登录或登录已失效', {
                    confirmButtonText: '去登录'
                }).then(() => {
                    location.reload()
                })
            })
            break
        case 500:
            MessageBox.alert('网络异常')
            break
        case 400:
            MessageBox.alert('您暂无权限，无法登录，请联系管理员')
            break
        default:
            MessageBox.alert(error.response.data.message || '系统正在开小差', MESSAGE_TITLE)
            break
    }
    reject(error)
}

const $post = (url, data, config, axiosConfig = {}) => {
    return new Promise((resolve, reject) => {
        const _url = url
        const _data = data
        axios.$post(_url, _data, axiosConfig).then(data => {
            responesMessage(data, config, resolve, reject)
        })
            .catch(error => {
                console.log(error)
                alertMessage(config, reject, error)
            })
    })
}

const $get = (url, params, config) => {
    return new Promise((resolve, reject) => {
        const _url = (config && config.default) ? url : `${url}`
        axios.get(_url, {
            params
        }).then(data => {
            responesMessage(data, config, resolve, reject)
        })
            .catch(error => {
                alertMessage(config, reject, error)
            })
    })
}

const $delete = (url, params, config, axiosConfig = {}) => {
    return new Promise((resolve, reject) => {
        const _url = url
        console.log(axiosConfig)
        axios.delete(_url, {
            params,
            ...axiosConfig
        }).then(data => {
            responesMessage(data, config, resolve, reject)
        })
            .catch(error => {
                alertMessage(config, reject, error)
            })
    })
}

Vue.prototype.$post = $post
Vue.prototype.$get = $get
Vue.prototype.$delete = $delete