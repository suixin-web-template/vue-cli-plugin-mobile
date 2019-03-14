/**
 * Created by liubingwen on 2017/12/19.
 */
export default {
  namespaced: true,
  state: {
    url: ""
  },
  actions: {
    register(_, url) {
      console.log(url);
    }
  }
};
