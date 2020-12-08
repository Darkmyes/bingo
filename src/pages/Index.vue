<template>
  <q-page class="full-height column justify-between q-pb-md bg-bingo">
    <div class="column items-center full-width" style="padding-bottom: 4rem;">
      <q-toolbar class="justify-end">
        <q-btn flat rounded no-caps color="white" class="btn-top text-shadow" label="¿Cómo Jugar?"/>
        <q-btn flat rounded no-caps color="white" class="btn-top text-shadow" label="Iniciar Sesión"/>
      </q-toolbar>
      <div class="text-white text-shadow titulo">BINGO</div>
      <q-btn class="bg-white text-primary btn-jugar" rounded icon="play_circle_filled" label="Jugar" />
    </div>
    <div class="cards">
      <q-card class="my-card bg-primary text-white">
        <div class="row justify-center">
          <q-icon class="card-icon" color="white" name="grid_on"/>
        </div>
        <q-card-section>
          <div class="text-h5 text-white text-center">
            Elije tus tablas de entre las opciones
          </div>
        </q-card-section>
      </q-card>

      <q-card class="my-card bg-primary text-white">
        <div class="row justify-center">
          <q-icon class="card-icon" color="white" name="login"/>
        </div>
        <q-card-section>
          <div class="text-h5 text-center">
            Únete a una Sala o Créala
          </div>
        </q-card-section>
      </q-card>

      <q-card class="my-card bg-primary text-white">
        <div class="row justify-center">
          <q-icon class="card-icon" color="white" name="casino"/>
        </div>
        <q-card-section>
          <div class="text-h5 text-center">
            Disfruta del juego
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

<style lang="scss">
  .bg-bingo {
    background-image: url('~assets/bg_svg.svg');
    background-repeat: no-repeat;
    background-size: contain;
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

  .btn-top {
    font-size: 20px;
  }

  .cards {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .my-card {
    border-radius: 2rem;
    max-width: 300px;
    min-width: 280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 2rem;
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
</style>
