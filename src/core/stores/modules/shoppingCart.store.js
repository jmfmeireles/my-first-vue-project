const state = () => ({
  addedMusics: []
});

const mutations = {
  addMusic: (state, music) => {
    const arrayOfMusics = [...state.addedMusics];
    arrayOfMusics.push(music);
    state.addedMusics = arrayOfMusics;
  },
  removeMusic: (state, musicId) => {
    //first, get the index of music
    const indexOfMusic = state.addedMusics
      .map(music => music.trackId)
      .indexOf(musicId);
    if (indexOfMusic > -1) {
      state.addedMusics.splice(indexOfMusic, 1);
    }
  }
};

const getters = {
  addedMusics: state => state.addedMusics,
  isMusicOnShoppingCart: state => {
    return musicId =>
      state.addedMusics.map(music => music.trackId).indexOf(musicId) > -1;
  },
  totalInformation: state => {
    return {
      amountToPay: state.addedMusics
        .map(music => Number(music.trackPrice))
        .reduce((a, b) => a + b, 0)
        .toFixed(2),
      count: state.addedMusics.length
    };
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations
};
