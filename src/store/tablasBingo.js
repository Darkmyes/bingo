function getRandom (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default {
  namespaced: true,
  state () {
    //
  },
  getters: {
    //
  },
  mutations: {
    //
  },
  actions: {
    generarTabla ({ commit }) {
      const B = []
      const I = []
      const N = []
      const G = []
      const O = []

      for (let i = 0; i < 5; i++) {
        let valB = getRandom(1, 15)
        while (B.includes(valB)) {
          valB = getRandom(1, 15)
        }
        B.push(valB)

        let valI = getRandom(16, 30)
        while (I.includes(valI)) {
          valI = getRandom(16, 30)
        }
        I.push(valI)

        if (i !== 2) {
          let valN = getRandom(31, 45)
          while (N.includes(valN)) {
            valN = getRandom(31, 45)
          }
          N.push(valN)
        }

        let valG = getRandom(46, 60)
        while (G.includes(valG)) {
          valG = getRandom(46, 60)
        }
        G.push(valG)

        let valO = getRandom(61, 75)
        while (O.includes(valO)) {
          valO = getRandom(61, 75)
        }
        O.push(valO)
      }

      return { B, I, N, G, O }
    }
  }
}
