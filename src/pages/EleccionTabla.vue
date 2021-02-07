<template>
  <q-page class="full-height q-pb-xl bg-secondary text-white">
    <div class="row justify-between text-h5 q-pl-lg q-pr-lg">
      <div class="row items-center">
        Número de Tablas
        <q-select
          class="q-pl-md"
          input-class="bg-secondary text-white text-h3"
          style="min-width: 150px;"
          v-model="cantidadTablas"
          :options="cantidades"
          filled
        />
      </div>
      <div class="column">
        <div class="text-h3" style="color: #FF9900;">
          10
          <img src="~assets/coin.svg" width="30px" />x
          Tabla
        </div>
        <div> Si tienes + de 4 tablas </div>
      </div>
    </div>
    <div class="tablas">
      <div v-for="(tabla, index) in tablasElec" :key="tabla.id">
        <div class="row justify-center q-pb-sm">
          <q-btn flat rounded dense color="white" icon="cached" label="Otra" style="font-size: 16px;" @click="nuevaTabla(tabla.id)"/>
        </div>
        <tabla v-model="tabla.tabla" :ref="'tabla'+tabla.id" :bg="colorPorNum(index)"/>
      </div>
    </div>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="check" class="text-white bg-primary shadow-8" @click="$router.push('unirse_sala')"/>
    </q-page-sticky>
  </q-page>
</template>

<script>
import Tabla from 'src/components/Tabla.vue'

export default {
  components: { Tabla },
  name: 'EleccionTabla',
  data: () => {
    return {
      cantidadTablas: 'x1',
      cantidades: ['x1', 'x2', 'x3', 'x4', 'x5', 'x6', 'x7', 'x8'],
      tablas: [
        { id: 1, seleccion: false, tabla: null },
        { id: 2, seleccion: false, tabla: null },
        { id: 3, seleccion: false, tabla: null },
        { id: 4, seleccion: false, tabla: null },
        { id: 5, seleccion: false, tabla: null },
        { id: 6, seleccion: false, tabla: null },
        { id: 7, seleccion: false, tabla: null },
        { id: 8, seleccion: false, tabla: null }
      ]
    }
  },
  computed: {
    tablasElec () {
      const cant = this.cantidadTablas.split('x')[1]
      const arr = []
      for (let x = 0; x < cant; x++) {
        arr.push(this.tablas[x])
      }
      return arr
    },
    puedeElegir () {
      let conteo = 0
      this.tablas.forEach(e => {
        if (e.seleccion) { conteo++ }
      })
      return conteo < this.cantidadTablas
    }
  },
  methods: {
    nuevaTabla (id) {
      this.$refs[('tabla' + id)][0].generarNueva()
    },
    colorPorNum (num) {
      const numString = num.toString()
      const numFinal = numString[numString.length - 1]
      switch (numFinal) {
        case '0' : return 1
        case '1' : return 2
        case '2' : return 3
        case '3' : return 4
        case '4' : return 5
        case '5' : return 1
        case '6' : return 2
        case '7' : return 3
        case '8' : return 4
        case '9' : return 5
        default: return 1
      }
    },
    seleccionarCantidad (cant) {
      this.cantidadTablas = cant

      let conteo = 0
      this.tablas.forEach(e => {
        if (e.seleccion) {
          conteo++
          if (conteo <= this.cantidadTablas) {
            e.seleccion = true
          } else {
            e.seleccion = false
          }
        }
      })

      /* if (conteo >= this.cantidadTablas) {
      } */
    }
  }
}
</script>

<style lang="scss">
  .btn-opc {
    font-size: 17px;
    border-radius: 4rem;
  }

  .opciones-cantidad {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(6rem ,6rem));
    justify-content: space-around;
    gap: 1rem;
    padding: 0 1rem 1rem 2rem;
  }

  .tablas {
    display: grid;
    grid-template-columns: repeat(auto-fit, 270px);
    justify-content: space-around;
    gap: 1rem;
    padding: 1rem;
  }

  @media (max-width: 500px) {
    .btn-opc {
      font-size: 16px;
    }
  }
</style>
