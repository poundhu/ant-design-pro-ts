export default {
  namespace: 'count',
  state: 0,
  reducers: {
    increase(state: any) {
      return state + 1;
    },
    decrease(state: any) {
      return state - 1;
    },
  },
};
