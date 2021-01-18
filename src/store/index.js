import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import flights from './modules/flights'

const store = new Vuex.Store({
    modules:{
        flights,
    },

})

export default store;
