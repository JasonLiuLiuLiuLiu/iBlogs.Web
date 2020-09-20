import axios from 'axios'
import config from './config'

if (process.server) {
  config.baseURL = process.env.baseUrl;
} else {
  config.baseURL = process.env.clientSideBaseUrl;
}

const service = axios.create(config);

// POST 传参序列化
service.interceptors.request.use(
  config => {
    // if (config.method === 'post') config.data = qs.stringify(config.data)
    return config
  },
  error => {
    return Promise.reject(error)
  }
);
// 返回状态判断
service.interceptors.response.use(
  res => {
    return res.data
  },
  error => {
    return Promise.reject(error)
  }
);

export default service
