import request from '../utils/request';
import { qs } from 'qs';

export async function fetchConstant(params) {
  return request({
    url: '/constant/find',
    params: { ...params },
    paramsSerializer: (data) => {
      return qs.stringify(data, { arrayFormat: 'repeat' });
    },
  });
}