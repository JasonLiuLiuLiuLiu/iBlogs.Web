import Vue from 'vue'
import Vuex from 'vuex'
import options from './modules/options'
import content from './modules/content'


Vue.use(Vuex);

const store = () => new Vuex.Store({
    options,
    content
  })
;

export default store
