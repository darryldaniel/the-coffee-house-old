import { login } from '../../api/login';

const state = {
  loggedIn: false,
  loginFailedStatus: '',
  isAdmin: false
}

const getters = {
  loggedIn(state) {
    return state.loggedIn;
  },
  loginFailedStatus(state) {
    return state.loginFailedStatus;
  },
  isAdmin(state) {
    return state.isAdmin;
  }
}

const actions = {
  login: async ({ commit }, payload) => {
    const result = await login(payload.username, payload.password);
    if (result.success) {
      commit('loginUser', result.roles);
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
  loginUser(state, userRoles) {
    state.loggedIn = true;
    state.isAdmin = userRoles.includes('admin');
  },
  logoutUser(state) {
    state.loggedIn = false;
  },
  setLoginFailedStatus(state, status) {
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
