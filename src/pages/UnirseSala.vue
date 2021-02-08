<template>
  <q-page class="full-height q-pb-md bg-secondary text-white">
    <div class="bg-bingo full-height" style="min-height: 100vh;">
      <div class="row justify-center items-center">
        <div class="btn-jugar-wrapper q-mr-xl">
          <q-btn class="bg-white text-black btn-jugar" rounded icon="play_circle_filled" label="Regresar" @click="$router.push('unirse_sala')"/>
        </div>
        <div class="row items-center q-mr-xl">
          <div class="text-h4" style="color: #FF9900;">
            -5
            <img src="~assets/coin.svg" width="30px" />
            <span class="text-white"> x Unirse</span>
          </div>
        </div>
        <q-btn class="bg-white text-black" rounded icon="add" label="Crear Sala" @click="$router.push('unirse_sala')"/>
      </div>
      <div class="salas">
        <Sala v-for="(sala, index) in salas" :key="index" :value="sala" :bg="colorPorNum(index)"></Sala>
      </div>
    </div>
  </q-page>
</template>

<script>
import Sala from 'components/Sala'

export default {
  name: 'UnirseSala',
  components: {
    Sala
  },
  data: () => {
    return {
      cantidadTablas: 1,
      cantidades: [1, 2, 4, 6, 8],
      salas: [
        {
          personas: 12,
          max: 40,
          codigoSala: 'R7G56'
        },
        {
          personas: 12,
          max: 40,
          codigoSala: 'R7G56'
        },
        {
          personas: 12,
          max: 40,
          codigoSala: 'R7G56'
        },
        {
          personas: 12,
          max: 40,
          codigoSala: 'R7G56'
        },
        {
          personas: 12,
          max: 40,
          codigoSala: 'R7G56'
        },
        {
          personas: 12,
          max: 40,
          codigoSala: 'R7G56'
        },
        {
          personas: 12,
          max: 40,
          codigoSala: 'R7G56'
        },
        {
          personas: 12,
          max: 40,
          codigoSala: 'R7G56'
        },
        {
          personas: 12,
          max: 40,
          codigoSala: 'R7G56'
        },
        {
          personas: 12,
          max: 40,
          codigoSala: 'R7G56'
        },
        {
          personas: 12,
          max: 40,
          codigoSala: 'R7G56'
        },
        {
          personas: 12,
          max: 40,
          codigoSala: 'R7G56'
        }
      ]
    }
  },
  methods: {
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
  .salas {
    display: grid;
    grid-template-columns: repeat(auto-fit, 170px);
    justify-content: space-around;
    gap: 1rem;
    padding: 1rem;
  }

  .btn-jugar {
    font-size: 16px;
  }

  .btn-jugar-wrapper {
    min-height: 90px;
    min-width: 140px;
    background-size: 120px;
  }
</style>
