export default {
  namespaced: true,
  state: {
    allProducts: []
  },
  getters: {},
  mutations: {
    GET_ALL_PRODUCTS(state, data) {
      state.allProducts = data;
    }
  },

  actions: {
    getAllProducts(context) {
      return new Promise((resolve, reject) => {
        this._vm.$apiClient
          .get("422f8a50?count=1000")
          .then(response => {
            context.commit("GET_ALL_PRODUCTS", response.data);
            resolve(response);
          })
          .catch(error => {
            console.log(error);
            reject(error);
          });
      });
    }
  }
};
