<template>
  <q-card class="modal-nueva-sala bg-secondary text-white baloo-font">
    <!-- NUEVA SALA -->
    <div class="items-center nueva-sala-titulo">
      <div class="text-center text-h5">Nueva Sala</div>
      <q-btn flat color="white" icon="close" @click="close"/>
    </div>
    <q-card-section>
      <div class="items-center usuarios-maximos">
        Usuarios Máximos
        <div class="row justify-between items-center">
          <q-btn rounded class="text-black" label="20" :class="{'bg-tb1': maxUsuarios == 20, 'bg-white': maxUsuarios != 20}" @click="maxUsuarios = 20"/>
          <q-btn rounded class="text-black" label="40" :class="{'bg-tb1': maxUsuarios == 40, 'bg-white': maxUsuarios != 40}"  @click="maxUsuarios = 40"/>
          <q-btn rounded class="text-black" label="60" :class="{'bg-tb1': maxUsuarios == 60, 'bg-white': maxUsuarios != 60}"  @click="maxUsuarios = 60"/>
          <q-btn rounded class="text-black" label="100" :class="{'bg-tb1': maxUsuarios == 100, 'bg-white': maxUsuarios != 100}"  @click="maxUsuarios = 100"/>
        </div>
      </div>
      <div class="modos-comunes">
        <div class="row no-wrap justify-between items-center">
          Tabla Llena
          <q-toggle color="green" v-model="modos.llena"/>
        </div>
        <div class="row no-wrap justify-between items-center">
          4 Esquinas
          <q-toggle color="green" v-model="modos.esquinas"/>
        </div>
        <div class="row no-wrap justify-between items-center">
          Tabla en X
          <q-toggle color="green" v-model="modos.enX"/>
        </div>
        <div class="row no-wrap justify-between items-center">
          Colúmnas
          <q-toggle color="green" v-model="modos.columnas"/>
        </div>
        <div class="row no-wrap justify-between items-center">
          Filas
          <q-toggle color="green" v-model="modos.filas"/>
        </div>
      </div>
      <div class="nueva-sala-titulo items-center q-mb-sm">
        <div class="text-center text-h6">Personalizados</div>
        <q-btn dense class="bg-white text-black" icon="add" @click="modalNuevoPersonalizado = true"/>
      </div>
      <div class="bg-accent rounded-borders modos-personalizados">
        <div
          v-for="(dat, index) in modosPers" :key="index"
          class="mod-pers-dat bg-grey-7"
        >
          <div class="column justify-between items-center" style="min-height: 100%;">
            <q-btn dense color="tb1" size="10px" icon="edit" @click="editPersonalizado(dat)"/>
            <q-btn dense color="tb2" size="10px" icon="delete" @click="deletePersonalizado(dat.nombre)"/>
          </div>
          <div> {{ dat.nombre }} </div>
          <div class="grid-pers-mini">
            <div
              v-for="(d, ind) in dat.grid" :key="ind"
              class="grid-cell-pers-mini"
              :class="{ 'bg-grey-10': d.val, 'bg-grey-4': !d.val }"
            ></div>
          </div>
        </div>
      </div>
    </q-card-section>

    <div class="row justify-center items-center">
      <q-btn rounded class="bg-white text-black" @click="listoGlobal">
        <div class="text-h6 row items-center">
          Listo! <span class="text-orange q-pl-sm q-pr-sm"> -40 </span>
          <img src="~assets/coin.svg" width="24px" />
        </div>
      </q-btn>
    </div>
    <q-dialog v-model="modalNuevoPersonalizado" persistent>
      <q-card class="modal-nuevo-pers bg-secondary text-white baloo-font">
        <div class="items-center nueva-sala-titulo">
          <div class="text-center text-h5">Nueva Sala</div>
          <q-btn flat color="white" icon="close" @click="modalNuevoPersonalizado = false"/>
        </div>
        <q-card-section style="display:grid; grid-template-columns: 5rem auto; align-items: center;">
          Nombre
          <q-input dense standout dark rounded v-model="nuevoPers.nombre" type="text" placeholder="Nombre"/>
        </q-card-section>
        <div class="bg-accent grid-personalizados">
          <div
            v-for="e in nuevoPers.grid"
            :key="e.key"
          >
            <div
              @click="selectCell(e)"
              class="grid-cell-pers cursor-pointer"
              :class="{ 'bg-grey-10': e.val, 'bg-grey-4': !e.val }"
            ></div>
          </div>
        </div>
        <div class="q-pt-md row justify-center">
          <q-btn rounded class="bg-white text-black" @click="addPersonalizado">
            <div class="text-h6 row items-center">
              Listo! <span class="text-orange q-pl-sm q-pr-sm"> -10 </span>
              <img src="~assets/coin.svg" width="24px" />
            </div>
          </q-btn>
        </div>
      </q-card>
    </q-dialog>
    <q-dialog v-model="modalRepetido" persistent>
      <q-card class="bg-secondary baloo-font text-white">
        <q-card-section class="row items-center">
          <span class="text-h6">El nombre ya está definido</span>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="ok" color="white" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-card>
</template>

<script>

export default {
  name: 'NuevaSala',
  props: ['value'],
  data: () => {
    return {
      modalNuevoPersonalizado: false,
      isEditing: false,
      modalRepetido: false,
      maxUsuarios: 20,
      nuevoPers: {
        nombre: '',
        grid: [
          { key: 0, val: false },
          { key: 1, val: false },
          { key: 2, val: false },
          { key: 3, val: false },
          { key: 4, val: false },
          { key: 5, val: false },
          { key: 6, val: false },
          { key: 7, val: false },
          { key: 8, val: false },
          { key: 9, val: false },
          { key: 10, val: false },
          { key: 11, val: false },
          { key: 12, val: false },
          { key: 13, val: false },
          { key: 14, val: false },
          { key: 15, val: false },
          { key: 16, val: false },
          { key: 17, val: false },
          { key: 18, val: false },
          { key: 19, val: false },
          { key: 20, val: false },
          { key: 21, val: false },
          { key: 22, val: false },
          { key: 23, val: false },
          { key: 24, val: false }
        ]
      },
      modos: {
        llena: false,
        esquinas: false,
        enX: false,
        columnas: false,
        filas: false
      },
      modosPers: []
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    listoGlobal () {
      this.modalNuevoPersonalizado = false
      this.$router.push('/jugar')
    },
    close () {
      this.$emit('input', false)
    },
    closeNuevo () {
      this.modalNuevoPersonalizado = false
      this.cleanNuevo()
    },
    cleanNuevo () {
      this.nuevoPers = {
        nombre: '',
        grid: [
          { key: 0, val: false },
          { key: 1, val: false },
          { key: 2, val: false },
          { key: 3, val: false },
          { key: 4, val: false },
          { key: 5, val: false },
          { key: 6, val: false },
          { key: 7, val: false },
          { key: 8, val: false },
          { key: 9, val: false },
          { key: 10, val: false },
          { key: 11, val: false },
          { key: 12, val: false },
          { key: 13, val: false },
          { key: 14, val: false },
          { key: 15, val: false },
          { key: 16, val: false },
          { key: 17, val: false },
          { key: 18, val: false },
          { key: 19, val: false },
          { key: 20, val: false },
          { key: 21, val: false },
          { key: 22, val: false },
          { key: 23, val: false },
          { key: 24, val: false }
        ]
      }
    },
    selectCell (e) {
      e.val = !e.val
      if (this.nuevoPers.grid[0].key === 0) {
        this.nuevoPers.grid.forEach(i => {
          i.key++
        })
      } else {
        this.nuevoPers.grid.forEach(i => {
          i.key--
        })
      }
    },
    addPersonalizado () {
      const itemFound = this.modosPers.find(i => i.nombre === this.nuevoPers.nombre)

      if (this.isEditing) {
        this.modalNuevoPersonalizado = false
        this.isEditing = false
        this.cleanNuevo()
        return
      }

      if (typeof itemFound !== 'undefined') {
        this.modalRepetido = true
        return
      }

      const dat = this.nuevoPers
      this.modosPers.push(dat)
      this.modalNuevoPersonalizado = false
      this.cleanNuevo()
    },
    editPersonalizado (item) {
      this.nuevoPers = item
      this.modalNuevoPersonalizado = true
      this.isEditing = true
    },
    deletePersonalizado (val) {
      this.modosPers = this.modosPers.filter(i => i.nombre !== val)
    }
  }
}
</script>

<style lang="scss">
  .modal-nueva-sala {
    min-width: 500px;
    border-radius: 2rem !important;
    padding: 1rem;
  }

  .modal-nuevo-pers {
    min-width: 500px;
    border-radius: 2rem !important;
    padding: 1rem;
  }

  .usuarios-maximos {
    display: grid;
    grid-template-columns: auto auto;
    gap:.5rem;
    padding-bottom: 1rem;
  }

  .nueva-sala-titulo {
    display: grid;
    grid-template-columns: auto 2rem;
  }

  .modos-comunes {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }

  .modos-personalizados {
    min-height: 150px;
    max-height: 150px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, auto) );
    gap: .5rem;
    align-content: start;
    padding: .5rem;
    overflow-y: auto;
  }

  .grid-personalizados {
    border-radius: 1.5rem !important;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: .5rem;
  }

  .grid-pers-mini {
    border-radius: 5px !important;
    padding: 1px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 1px;
  }

  .mod-pers-dat {
    padding: .5rem;
    display: grid;
    gap: .5rem;
    grid-template-columns: 2rem auto 56px;
    border-radius: .5rem;
    align-items: center;
  }

  .grid-cell-pers {
    border-radius: .5rem !important;
    min-width: 80px;
    min-height: 80px;
  }

  .grid-cell-pers-mini {
    border-radius: 2px !important;
    min-width: 10px;
    min-height: 10px;
    max-width: 10px;
    max-height: 10px;
  }

  @media (max-width: 600px) {
    .modal-nueva-sala {
      min-width: 95vw;
    }

    .usuarios-maximos {
      grid-template-columns: auto;
    }
  }
</style>
