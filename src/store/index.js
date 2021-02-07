import Vue from 'vue'
import Vuex from 'vuex'

import tablasBingo from './tablasBingo'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      tablasBingo
    },
    strict: process.env.DEBUGGING
  })

  return Store
}
