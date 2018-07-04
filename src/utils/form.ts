import { forIn, isArray, isBoolean, isDate } from 'lodash';
import { message } from 'antd';
import { formatDate } from './utils';
import { fetchConstant } from 'services/global';

export class FormUtils {
  formatPicker(obj) {
    const payload = {};
    forIn(obj, (val, key) => {
      const arr = [];
      val.forEach((item) => {
        if ('showValue' in item) {
          arr.push({
            label: item.showValue,
            value: item.value,
          });
        }
      });
      payload[key] = arr;
    });
    return payload;
  }
  public createPickers(arr: [string]) {
    const data = {
      codes: arr,
      multiFlag: 1,
    };
    return fetchConstant(data).then((res) => {
      if (res.code === 200) {
        return this.formatPicker(res.data);
      }
    });
  }

  public checkForm(form) {
    let payload: any = {};
    form.validateFields((error, value) => {
      if (error) {
        message.warning('请填写必填项');
        payload = false;
        return;
      }
      forIn(value, (item, key) => {
        if (item !== undefined) {
          payload[key] = item;
        }
        if (isArray(item) && item.length === 1) {
          payload[key] = item.join(',');
        }
        if (isBoolean(item)) {
          payload[key] = item ? '1' : '0';
        }
        if (isDate(item)) {
          payload[key] = formatDate(item);
        }
        if (isArray(item) && item.length === 3) {
          payload.countryId = 100000;
          payload.provinceId = item[0];
          payload.cityId = item[1];
          payload.districtId = item[2];
        }
      });
    });
    return payload;
  }
}
