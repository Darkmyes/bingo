<template>
  <q-card class="sala" :class="bgColor">
    <q-card-section class="row justify-center items-center">
      <div class="text-h5">
        {{ value.personas }}
        /
        {{ value.max }}
      </div>
      <q-icon name="people" size="24px" class="q-pl-sm"/>
    </q-card-section>
    <q-card-section class="row justify-center items-center">
      <div class="text-h6">
        # {{ value.codigoSala }}
      </div>
      <q-icon name="content_copy" size="16px" class="q-pl-sm"/>
    </q-card-section>
    <div class="row justify-center items-center q-pb-sm">
      <q-btn style="min-width: 90%; font-size: 18px;" class="bg-white text-black" rounded icon="play_circle_filled" label="Elegir" @click="$router.push('unirse_sala')"/>
    </div>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Sala',
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
  .sala {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 2.5rem auto;
    border-radius: 1.5rem;
    min-width: 170px;
    max-width: 170px;
    padding: 0 .5rem .5rem .5rem;
  }
</style>
