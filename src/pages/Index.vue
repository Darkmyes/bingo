<template>
  <q-page class="full-height q-pb-md bg-secondary">
    <div class="bg-bingo">
      <q-toolbar class="justify-end">
        <q-btn flat rounded no-caps color="white" class="btn-top text-shadow" label="Registrarme" @click="btnRegistro"/>
        <q-btn flat rounded no-caps color="white" class="btn-top text-shadow" label="Iniciar Sesión" @click="btnLogin"/>
      </q-toolbar>
      <div class="row justify-around items-center">
        <img id="bingo-logo" src="~assets/bingo_logo.png"/>
        <div class="btn-jugar-wrapper">
          <q-btn class="bg-white text-black btn-jugar" rounded icon="play_circle_filled" label="Jugar" @click="$router.push('eleccion_tabla')"/>
        </div>
      </div>
      <div class="cards q-pt-xl">
        <div class="my-card back-number-1">
          <div class="row justify-center q-pb-md">
            <q-icon class="card-icon" color="white" name="grid_on"/>
          </div>
          <div class="text-h5 text-white text-center">
            Elije tus tablas de entre las opciones
          </div>
        </div>
        <div class="my-card back-number-2">
          <div class="row justify-center q-pb-md">
            <q-icon class="card-icon" color="white" name="login"/>
          </div>
          <div class="text-h5 text-white text-center">
            Únete a una Sala o Créala
          </div>
        </div>
        <div class="my-card back-number-3">
          <div class="row justify-center q-pb-md">
            <q-icon class="card-icon" color="white" name="casino"/>
          </div>
          <div class="text-h5 text-white text-center">
            Disfruta del juego
          </div>
        </div>
      </div>
    </div>
    <q-dialog v-model="sesion">
      <sesion v-model="modo"></sesion>
    </q-dialog>
  </q-page>
</template>

<script>
import Sesion from 'src/components/Sesion.vue'

export default {
  name: 'PageIndex',
  components: { Sesion },
  data: () => {
    return {
      sesion: false,
      modo: 'login'
    }
  },
  methods: {
    btnLogin () {
      this.modo = 'login'
      this.sesion = true
    },
    btnRegistro () {
      this.modo = 'registro'
      this.sesion = true
    }
  }
}
</script>

<style lang="scss">
  .bg-bingo {
    background-image: url('~assets/bg_svg.svg');
    background-repeat: no-repeat;
    background-size: 100%; /*contain;*/
  }

  .titulo {
    font-size: 200px;
    max-height: 250px;
  }

  .btn-jugar {
    font-size: 40px;
    border-radius: 4rem;
    padding-right: .5rem;
  }

  .btn-jugar-wrapper {
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-width: 250px;
    min-height: 200px;
    background-size: 250px;
    background-repeat: no-repeat;
    background-image: url('~assets/tablas_bingo.png');
  }

  .btn-top {
    font-size: 20px;
  }

  .cards {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    gap: 1rem;
    padding-left: 3rem;
  }

  .my-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    max-width: 275px;
    min-width: 275px;
    min-height: 250px;
  }

  .back-number-1 {
    background-image: url('~assets/uno.svg');
    background-repeat: no-repeat;
    background-size: 120px;
  }

  .back-number-2 {
    background-image: url('~assets/dos.svg');
    background-repeat: no-repeat;
    background-size: 160px;
  }

  .back-number-3 {
    background-image: url('~assets/tres.svg');
    background-repeat: no-repeat;
    background-size: 160px;
  }

  .card-icon {
    font-size: 120px;
  }

  @media (min-width: 1400px) {
    .bg-bingo {
      background-image: url('~assets/bg_svg_1400.svg');
      /* background-image: url('~assets/bg_svg_1200.svg'); */
    }
  }

  @media (max-width: 1100px) {
    .bg-bingo {
      background-image: url('~assets/bg_svg_1000.svg');
      /* background-image: url('~assets/bg_svg_900.svg'); */
    }

    #bingo-logo {
      width: 550px;
    }
  }

  @media (max-width: 900px) {
    .cards {
      flex-direction: column;
    }

    .my-card {
      flex-direction: row;
      margin-left: 1rem;
      margin-right: 1rem;
      max-width: 100%;
      align-items: center;
      padding-left: 2rem;
      padding-right: 2rem;
    }

    .titulo {
      font-size: 150px;
      max-height: 200px;
    }

    .btn-jugar {
      font-size: 32px;
    }

    #bingo-logo {
      width: 400px;
    }
  }

  @media (max-width: 500px) {
    .bg-bingo {
      background-image: url('~assets/bg_svg_500.svg');
    }

    .titulo {
      font-size: 80px;
      max-height: 120px;
    }

    .btn-jugar {
      font-size: 24px;
    }

    .btn-top {
      font-size: 18px;
    }

    .card-icon {
      font-size: 80px;
    }

  }

  @media (max-width: 400px) {
    #bingo-logo {
      width: 300px;
    }

    .cards {
      padding-left: 1rem;
    }

    .my-card {
      min-height: 180px;
    }

    .back-number-1 {
      background-size: 75px;
    }

    .back-number-2, .back-number-3 {
      background-size: 100px;
    }
  }
</style>
