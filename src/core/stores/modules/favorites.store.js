const state = () => ({
  favorites: []
});

const mutations = {
  addFavorite: (state, music) => {
    const arrayOfMusics = [...state.favorites];
    arrayOfMusics.push(music);
    state.favorites = arrayOfMusics;
  },
  removeFavorite: (state, musicId) => {
    //first, get the index of music
    const indexOfMusic = state.favorites
      .map(music => music.trackId)
      .indexOf(musicId);
    if (indexOfMusic > -1) {
      state.favorites.splice(indexOfMusic, 1);
    }
  }
};

const getters = {
  favorites: state => state.favorites,
  isMusicOnFavorites: state => {
    return musicId =>
      state.favorites.map(music => music.trackId).indexOf(musicId) > -1;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations
};
