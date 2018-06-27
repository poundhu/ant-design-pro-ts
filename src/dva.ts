import { message } from 'antd';

export function config() {
  return {
    onError(err: any) {
      err.preventDefault();
      message.error(err.message);
    },
    initialState: {
      global: {
        text: 'hi umi + dva',
      },
    },
  };
}
