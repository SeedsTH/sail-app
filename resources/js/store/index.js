import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //posts: [],
    postLoaded: null,
    postTitle: "",
    postPhotoName: "",
    postPhotoFileURL: null,
    postPhotoPreview: null,
  },
  getters: {},
  mutations: {},
  actions: {
    
  },
  modules: {}
})
