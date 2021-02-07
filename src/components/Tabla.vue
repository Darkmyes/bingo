<template>
  <div class="tabla shadow-4" :class="bgColor">
    <div class="tabla-titulo text-white">
      <div>B</div><div>I</div><div>N</div><div>G</div><div>O</div>
    </div>
    <div v-if="tabla != null" class="tabla-contenido">
      <div class="columna columna-b text-black">
        <div v-for="(numero, index) in tabla.B" :key="index">
          {{ numero }}
        </div>
      </div>
      <div class="columna text-black">
        <div v-for="(numero, index) in tabla.I" :key="index">
          {{ numero }}
        </div>
      </div>
      <div class="columna text-black">
        <div v-for="numero in [0,1]" :key="numero">
          {{ tabla.N[numero] }}
        </div>
        <div><div class="tabla-icono-b text-white cursor-pointer" :class="bgColor">B</div></div>
        <div v-for="numero in [2,3]" :key="numero">
          {{ tabla.N[numero] }}
        </div>
      </div>
      <div class="columna text-black">
        <div v-for="(numero, index) in tabla.G" :key="index">
          {{ numero }}
        </div>
      </div>
      <div class="columna columna-o text-black">
        <div v-for="(numero, index) in tabla.O" :key="index">
          {{ numero }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Tabla',
  props: ['value', 'bg'],
  /* props: {
    tabla: {
      type: Object,
      default: null
    }
  }, */
  data: () => {
    return {
      tabla: null
    }
  },
  mounted () {
    if (this.value == null) {
      this.generarNueva()
    } else {
      this.tabla = this.value
    }
  },
  computed: {
    bgColor () {
      if (typeof (this.bg) !== 'undefined') {
        return 'bg-tb' + this.bg.toString()
      }
      return 'bg-tb1'
    }
  },
  methods: {
    ...mapActions('tablasBingo', ['generarTabla']),
    generarNueva () {
      this.generarTabla().then((val) => {
        this.tabla = val
        this.$emit('input', this.tabla)
      })
    }
  }
}
</script>

<style lang="scss">
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
    /*min-height: 400px;
    min-width: 300px;*/
    min-height: 320px;
    min-width: 200px;
    max-width: 250px; /* 340px */
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
    display: block;
    font-size: 20px;
    border-radius: 50%;
    min-width: 42px;
    min-height: 42px;
    max-height: 42px;
    max-height: 42px;
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
    font-size: 30px;
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
</style>
