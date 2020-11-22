import firebase from "firebase";

const state = () => ({
  isLoading: false,
  isAuthenticated: false,
  user: null,
  errorMessage: null
});

const actions = {
  signUserUp({ commit }, payload) {
    commit("setLoading", true);
    commit("clearError");
    firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        commit("setLoading", false);
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        };
        commit("setUser", newUser);
      })
      .catch(error => {
        commit("setLoading", false);
        commit("setError", error);
        console.log(error);
      });
  },
  signUserIn({ commit }, payload) {
    commit("setLoading", true);
    commit("clearError");
    console.log(payload);
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        commit("setLoading", false);
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        };
        commit("setUser", newUser);
      })
      .catch(error => {
        commit("setLoading", false);
        commit("setError", error);
        console.log(error);
      });
  },
  signUserInGoogle({ commit }) {
    commit("setLoading", true);
    commit("clearError");
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(user => {
        commit("setLoading", false);
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        };
        commit("setUser", newUser);
      })
      .catch(error => {
        commit("setLoading", false);
        commit("setError", error);
        console.log(error);
      });
  },
  signUserInFacebook({ commit }) {
    commit("setLoading", true);
    commit("clearError");
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(user => {
        commit("setLoading", false);
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        };
        commit("setUser", newUser);
      })
      .catch(error => {
        commit("setLoading", false);
        commit("setError", error);
        console.log(error);
      });
  },
  signUserInGithub({ commit }) {
    commit("setLoading", true);
    commit("clearError");
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then(user => {
        commit("setLoading", false);
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        };
        commit("setUser", newUser);
      })
      .catch(error => {
        commit("setLoading", false);
        commit("setError", error);
        console.log(error);
      });
  },
  signUserInTwitter({ commit }) {
    commit("setLoading", true);
    commit("clearError");
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.TwitterAuthProvider())
      .then(user => {
        commit("setLoading", false);
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        };
        commit("setUser", newUser);
      })
      .catch(error => {
        commit("setLoading", false);
        commit("setError", error);
        console.log(error);
      });
  },
  autoSignIn({ commit }, payload) {
    commit("setUser", {
      id: payload.uid,
      name: payload.displayName,
      email: payload.email,
      photoUrl: payload.photoURL
    });
  },
  resetPasswordWithEmail({ commit }, payload) {
    const { email } = payload;
    commit("setLoading", true);
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        commit("setLoading", false);
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
    commit("setUser", null);
  }
};

const mutations = {
  setLoading(state) {
    state.isLoading = true;
  },
  setUser(state, payload) {
    state.user = payload;
    state.isAuthenticated = true;
    state.isLoading = false;
  },
  setError(state, payload) {
    state.errorMessage = payload.message;
    state.isAuthenticated = false;
    state.isLoading = false;
  },
  clearError(state) {
    state.errorMessage = null;
  }
};

const getters = {
  isAuthLoading: state => state.isLoading,
  isAuthenticated: state => state.isAuthenticated,
  userInfo: state => state.user,
  errorMessage: state => state.errorMessage
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
