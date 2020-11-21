import { getMusics } from "../../services/catalog.service";

const state = {
  isLoading: true,
  musicsAll: [],
  musicsToShow: [],
  pagination: {
    currentPage: 1,
    numberOfElementsPerPage: 5,
    numberOfResultsToShow: 0
  },
  stringToSearch: ""
};

const actions = {
  async getMusics({ commit }) {
    commit("startMusicsLoading");
    const musics = await getMusics();
    await commit("loadMusics", musics);
  }
};

const mutations = {
  startMusicsLoading: state => {
    state.isLoading = true;
  },
  loadMusics: (state, musics) => {
    state.isLoading = false;
    state.musicsAll = musics;
    state.musicsToShow = musics.slice(
      0,
      state.pagination.numberOfElementsPerPage
    );
    const pagination = {
      ...state.pagination,
      numberOfResultsToShow: musics.length
    };
    state.pagination = pagination;
  },
  changeResultsToShow: (state, { page, stringToSearch }) => {
    const allProducts = state.musicsAll;
    let aFilteredProducts = allProducts;
    let iNumberOfAvailableProducts = allProducts.length;
    const elementsPerPage = state.pagination.numberOfElementsPerPage;
    console.log(stringToSearch);
    //first, search products by name
    if (stringToSearch) {
      aFilteredProducts = allProducts.filter(
        music =>
          music.trackName
            .toLowerCase()
            .includes(stringToSearch.toLowerCase()) ||
          music.artistName.toLowerCase().includes(stringToSearch.toLowerCase())
      );
      iNumberOfAvailableProducts = aFilteredProducts.length;
    }
    //then, paging
    let iPage =
      (page - 1) * elementsPerPage >= iNumberOfAvailableProducts ? 1 : page;
    aFilteredProducts = aFilteredProducts.slice(
      (iPage - 1) * elementsPerPage,
      iPage * elementsPerPage
    );
    state.musicsToShow = aFilteredProducts;
    state.pagination = {
      ...state.pagination,
      currentPage: iPage,
      numberOfResultsToShow: iNumberOfAvailableProducts
    };
    state.stringToSearch = stringToSearch;
  }
};

const getters = {
  musicsToDisplay: state => state.musicsToShow,
  currentPage: state => (state.pagination ? state.pagination.currentPage : 1),
  numberOfResultsToShow: state =>
    state.pagination ? state.pagination.numberOfResultsToShow : 0,
  numberOfElementsPerPage: state =>
    state.pagination ? state.pagination.numberOfElementsPerPage : 5,
  stringToSearch: state => state.stringToSearch,
  isLoading: state => state.isLoading
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
