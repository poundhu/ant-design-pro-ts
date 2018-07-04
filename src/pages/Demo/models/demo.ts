import { fetchList } from '../services';
import { ReduxAction, ReduxSagaEffects, DvaModelReducer } from 'interfaces/index';

export default {
  namespace: 'Demo',
  state: {
    table: {
      list: [],
      pagination: {},
    },
    filter: {

    },
  },
  effects: {
    *fetchList(action: ReduxAction, { call, put }: ReduxSagaEffects) {
      const data = yield call(fetchList, action.payload);
      console.log(data);
      if (data.code === 200) {
        yield put({ type: 'fetchListSuc', payload: data.data });
      } else {
        throw data;
      }
    },
  },
  reducers: {
    fetchListSuc(state, { payload }): DvaModelReducer {
      return {
        ...state,
        table: {
          list: payload.items,
          pagination: {
            total: payload.totalCount,
            current: payload.currentPage,
            pageSize: payload.pageSize,
          },
        },
      };
    },
    saveFilter(state, { payload }) {
      return {
        ...state,
        filter: {
          ...payload,
        },
      };
    },
  },
};
