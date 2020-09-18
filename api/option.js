import request from '@/service'

export function getOptions(keys) {
  return request({
    url: '/option/getOptions',
    method: 'post',
    data: keys
  })
}
