import request from 'utils/request';

export async function fetchList(params) {
  return request({
    url: '/api/customer/customerView',
    method: 'post',
    data: params,
  });
}
