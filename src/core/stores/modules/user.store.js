import firebase from "firebase";
import * as Constants from "../../../resources/constants";

const state = () => ({
  isLoading: false,
  isAuthenticated: false,
  user: null,
  messageHandling: {
    message: "",
    type: null
  },
  mode: Constants.SIGN_IN
});

const actions = {
  signUserUp({ commit }, payload) {
    commit("setLoading", true);
    commit("clearMessage");
    firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(data => {
        commit("setUser", data.user);
      })
      .catch(error => {
        commit("setLoading", false);
        commit("setError", error);
        console.log(error);
      });
  },
  signUserIn({ commit }, payload) {
    commit("setLoading", true);
    commit("clearMessage");
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(data => {
        commit("setUser", data.user);
      })
      .catch(error => {
        commit("setLoading", false);
        commit("setError", error);
        console.log(error);
      });
  },
  signUserInGoogle({ commit }) {
    commit("setLoading", true);
    commit("clearMessage");
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(data => {
        commit("setUser", data.user);
      })
      .catch(error => {
        commit("setLoading", false);
        commit("setError", error);
        console.log(error);
      });
  },
  signUserInFacebook({ commit }) {
    commit("setLoading", true);
    commit("clearMessage");
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(data => {
        commit("setUser", data.user);
      })
      .catch(error => {
        commit("setLoading", false);
        commit("setError", error);
        console.log(error);
      });
  },
  signUserInGithub({ commit }) {
    commit("setLoading", true);
    commit("clearMessage");
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then(data => {
        commit("setUser", data.user);
      })
      .catch(error => {
        commit("setLoading", false);
        commit("setError", error);
        console.log(error);
      });
  },
  resetPasswordWithEmail({ commit }, payload) {
    const { email } = payload;
    commit("setLoading", true);
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        commit("setInfo", "An email was sent to your account. Please check!");
        console.log("Email Sent");
      })
      .catch(error => {
        commit("setLoading", false);
        commit("setError", error);
        console.log(error);
      });
  },
  logout({ commit }) {
    firebase.auth().signOut();
    commit("logout");
  }
};

const mutations = {
  setLoading(state, payload) {
    state.isLoading = payload;
  },
  setUser(state, payload) {
    state.user = {
      uid: payload.uid,
      displayName: payload.displayName,
      email: payload.email,
      photoURL: payload.photoURL
    };
    state.isAuthenticated = true;
    state.isLoading = false;
  },
  setError(state, payload) {
    state.messageHandling = {
      type: "danger",
      message: payload.message
    };
    state.isAuthenticated = false;
    state.isLoading = false;
  },
  setInfo(state, payload) {
    state.messageHandling = {
      type: "info",
      message: payload
    };
    state.isAuthenticated = false;
    state.isLoading = false;
  },
  clearMessage(state) {
    state.messageHandling = {
      type: null,
      message: ""
    };
  },
  logout(state) {
    state.user = null;
    state.isAuthenticated = false;
    state.isLoading = false;
  },
  setSignIn(state) {
    state.mode = Constants.SIGN_IN;
  },
  setSignUp(state) {
    state.mode = Constants.SIGN_UP;
  },
  setPasswordRecovery(state) {
    state.mode = Constants.RECOVER_PASSWORD;
  }
};

const getters = {
  isAuthLoading: state => state.isLoading,
  isAuthenticated: state => state.isAuthenticated,
  isSignUp: state => state.isSignUp,
  userInfo: state => state.user,
  isErrorStatus: state => state.isErrorStatus,
  messageType: state => state.messageHandling.type,
  authMessage: state => state.messageHandling.message,
  mode: state => state.mode
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
