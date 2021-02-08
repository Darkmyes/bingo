<template>
  <q-page class="full-height bg-secondary text-white" style="padding-bottom: 150px;">
    <div class="row justify-between text-h5 q-pl-lg q-pr-lg">
      <div class="row items-center">
        Número de Tablas
        <q-btn-dropdown flat :label="cantidadTablas" content-class="bg-secondary" class="text-h5 q-ml-md" :text-color="color(colorPorNum(parseInt(cantidadTablas[cantidadTablas.length - 1]) - 1))">
          <q-list>
            <q-item v-for="(cant, index) in cantidades" :key="index" clickable @click="cantidadTablas = cant" v-close-popup>
              <q-item-section>
                <q-item-label
                  class="text-center text-h5 baloo-font"
                  :class="textColor(colorPorNum(index))"
                >
                  {{cant}}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
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
      <div class="btn-jugar-wrapper">
        <q-btn class="bg-white text-black btn-jugar" rounded icon="play_circle_filled" label="Elegir" @click="$router.push('unirse_sala')"/>
      </div>
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
    textColor (val) {
      if (typeof (val) !== 'undefined') {
        return 'text-tb' + val.toString()
      }
      return 'text-tb1'
    },
    color (val) {
      if (typeof (val) !== 'undefined') {
        return 'tb' + val.toString()
      }
      return 'tb1'
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

  .btn-jugar {
    font-size: 24px;
  }

  .btn-jugar-wrapper {
    min-height: 130px;
    min-width: 150px;
    background-size: 160px;
  }

  @media (max-width: 500px) {
    .btn-opc {
      font-size: 16px;
    }
  }
</style>
