<template>
  <q-page class="full-height bg-secondary text-white">
    <div class="bg-bingo-2" style="min-height: 100vh;">
      <div class="left-section">
        <div class="row justify-between text-h4 items-center q-pl-lg q-pr-lg">
          <div class="row justify-between text-h5 items-center">
            <div>Número Actual</div>
            <div class="q-pl-lg q-pr-lg"> - </div>
            <div class="bola text-tb1">
              B4
            </div>
          </div>
          <div class="row justify-between text-h4 items-center">
            <q-icon name="timer" size="32px"/>
            <div class="q-pl-sm">
              60
              <span class="text-h6"> seg </span>
            </div>
          </div>
          <q-btn class="bg-white text-black text-h6" rounded icon="play_circle_filled" label="Listo" @click="$router.push('unirse_sala')"/>
        </div>
        <div class="tablas-juego">
          <div v-for="(tabla, index) in tablas" :key="tabla.id">
            <tabla v-model="tabla.tabla" :ref="'tabla'+tabla.id" :bg="colorPorNum(index)"/>
          </div>
        </div>
      </div>
      <div class="right-section">
        <div class="text-h5 text-center">
          <span style="color: #6A6A6A;">Sala #</span> F457R
        </div>
        <div class="bolas bg-accent">
          <div v-for="tabla in tablas" :key="tabla.id" class="bola text-tb1">
            B4
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Tabla from 'src/components/Tabla.vue'

export default {
  name: 'Jugar',
  components: { Tabla },
  data: () => {
    return {
      cantidadTablas: 1,
      cantidades: [1, 2, 4, 6, 8],
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
    }
  }
}
</script>

<style lang="scss">
  .bg-bingo-2 {
    background-image: url('~assets/bg_svg.svg');
    background-repeat: no-repeat;
    background-size: 100%;
    display: grid;
    grid-template-columns: auto 300px;
  }

  .left-section {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 4rem auto;
  }

  .right-section {
    display: grid;
    padding: 1rem;
    gap: 1rem;
    grid-template-columns: auto;
    grid-template-rows: 1.5rem auto;
  }

  .tablas-juego {
    display: grid;
    grid-template-columns: repeat(auto-fit, 270px);
    justify-content: space-around;
    gap: 1rem;
    padding: 1rem;
  }

  .bola {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #EAEAEA;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25), inset 0px -20px 10px rgba(0, 0, 0, 0.25);
  }

  .bolas {
    display: grid;
    padding: 1rem;
    gap: .5rem;
    grid-template-columns: repeat(4, 1fr);
    border-radius: 1.5rem;
    align-content: start;
  }
</style>
