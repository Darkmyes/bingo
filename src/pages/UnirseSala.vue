<template>
  <q-page class="full-height">
    <div class="row justify-between text-h4 q-pl-lg q-pr-lg q-pt-md q-pb-md">
      <div>Únete a la Sala que desees</div>
      <q-btn color="primary" icon="add" label="Crear Sala" />
    </div>
    <div>
      <div>
        dasdsad
        <q-btn color="primary" icon="login" label="OK" />
      </div>
    </div>
    <div class="row justify-between text-h5 q-pl-lg q-pr-lg q-pt-md q-pb-md">
      Entra a una Sala como Espectador
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'UnirseSala',
  data: () => {
    return {
      cantidadTablas: 1,
      cantidades: [1, 2, 4, 6, 8]
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
    grid-template-columns: repeat(auto-fit, minmax(300px, 340px));
    justify-content: space-around;
    gap: 1rem;
    padding: 1rem;
  }

  .tabla {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 2.5rem auto;
    border-radius: 1.5rem;
    min-height: 400px;
    max-width: 340px;
    min-width: 300px;
    padding: 0 .5rem .5rem .5rem;
  }

  .tabla-titulo {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    text-align: center;
    font-size: 32px;
  }

  .tabla-contenido {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2px;
  }

  .tabla-icono-b {
    font-size: 24px;
    border-radius: 50%;
    min-width: 2.5rem;
    min-height: 2.5rem;
  }

  .check-tabla {
    display: absolute;
    top: -2rem;
  }

  .columna {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(5, 1fr);
    gap: 2px;
    text-align: center;
  }

  .columna div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }

  .columna-b div:first-child {
    border-top-left-radius: 1rem;
  }

  .columna-b div:last-child {
    border-bottom-left-radius: 1rem;
  }

  .columna-o div:first-child {
    border-top-right-radius: 1rem;
  }

  .columna-o div:last-child {
    border-bottom-right-radius: 1rem;
  }

  @media (max-width: 500px) {
    .btn-opc {
      font-size: 16px;
    }
  }
</style>
