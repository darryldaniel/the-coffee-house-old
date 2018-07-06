import { login } from '../../api/login';

const state = {
  loggedIn: false,
  loginFailedStatus: ''
}

const getters = {
  loggedIn (state) { 
    return state.loggedIn;
  },
  loginFailedStatus (state) {
    return state.loginFailedStatus;
  }
}

const actions = {
  login:  async ({ commit }, payload) => {
    const result = await login(payload.username, payload.password);
    if (result.success) {
      commit('loginUser');
      payload.router.push('/');
    } else {
      commit('setLoginFailedStatus', result.message);
    }
  },
  resetLoginFailedStatus: ({ commit }) => {
    commit('setLoginFailedStatus', '');
  }
}

const mutations = {
  loginUser (state) {
    state.loggedIn = true;
  },
  logoutUser (state) {
    state.loggedIn = false;
  },
  setLoginFailedStatus (state, status) {
    state.loginFailedStatus = status;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
