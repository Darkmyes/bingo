<template>
  <q-card class="modal-sesion bg-secondary text-white baloo-font">
    <!-- INICIO SESIÓN -->
    <div v-if="value === 'login'">
      <div class="text-h4 text-center q-pt-md">
        Iniciar Sesión
      </div>
      <q-card-section>
        <div class="text-h6">Correo</div>
        <q-input filled class="bg-accent" v-model="user.correo" input-class="text-white" type="text"/>
        <br/>
        <div class="text-h6">Contraseña</div>
        <q-input filled class="bg-accent" v-model="user.pass" input-class="text-white" type="password"/>
      </q-card-section>
      <q-card-section class="row justify-center">
        <q-btn no-caps rounded style="min-width: 80%;" class="text-black bg-white text-h5" label="Entrar" />
      </q-card-section>
    </div>
    <!-- REGISTRO -->
    <div v-else>
      <div class="text-h4 text-center q-pt-md">
        Registro
      </div>
      <!-- 1 PARTE -->
      <q-card-section v-if="pag === 1">
        <div class="text-h6">Apellidos</div>
        <q-input filled class="bg-accent" input-class="text-white" type="text" v-model="user.apellidos"/>
        <br/>
        <div class="text-h6">Nombres</div>
        <q-input filled class="bg-accent" input-class="text-white" type="text" v-model="user.nombres"/>
        <br/>
        <div class="text-h6">Fecha de Nacimiento</div>
        <q-input filled class="bg-accent" input-class="text-white" type="date" v-model="user.fechaNacimiento"/>
      </q-card-section>
      <!-- 2 PARTE -->
      <q-card-section v-if="pag === 2">
        <div class="text-h6">Correo</div>
        <q-input filled class="bg-accent" input-class="text-white" type="text" v-model="user.correo"/>
        <div class="text-h6">Contraseña</div>
        <q-input filled class="bg-accent" input-class="text-white" type="text" v-model="user.pass"/>
        <div class="text-h6">Repetir Contraseña</div>
        <q-input filled class="bg-accent" input-class="text-white" type="text" v-model="user.confirmPass"/>
      </q-card-section>
      <div class="row justify-center">
        <div class="circle-btn cursor-pointer q-mr-md" :class="{'bg-white' : pag === 1, 'bg-accent' : pag === 2}" @click="pag = 1"></div>
        <div class="circle-btn cursor-pointer q-ml-md" :class="{'bg-white' : pag === 2, 'bg-accent' : pag === 1}" @click="pag = 2"></div>
      </div>
      <q-card-section class="row justify-between">
        <q-btn no-caps v-if="pag === 1" rounded style="min-width: 100%;" class="text-black bg-white text-h5" label="Siguiente" @click="pag = 2"/>
        <q-btn no-caps v-if="pag === 2" rounded style="min-width: 30%;" class="text-black bg-white text-h5" label="Atras" @click="pag = 1"/>
        <q-btn no-caps v-if="pag === 2" rounded style="min-width: 50%;" class="text-black bg-white text-h5" label="Finalizar" />
      </q-card-section>
    </div>
    <q-dialog v-model="confirm" persistent>
      <q-card class="modal-sesion bg-secondary text-white baloo-font">
        <q-card-section class="row justify-center text-h4">
          Registro Exitoso
        </q-card-section>
        <q-card-section class="row justify-center text-h6 text-center">
          Se ha enviado un mensaje de verificación al correo que especificaste
        </q-card-section>
        <q-card-section class="row justify-center">
          <q-btn no-caps rounded style="min-width: 80%;" class="text-black bg-white text-h5" label="Entendido" @click="confirm = false"/>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-card>
</template>

<script>

export default {
  name: 'Sesion',
  props: ['value'],
  data: () => {
    return {
      pag: 1,
      pags: [1, 2],
      confirm: false,
      user: {
        apellidos: '',
        nombres: '',
        fechaNacimiento: '',
        correo: '',
        pass: '',
        confirmPass: ''
      }
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss">
  .modal-sesion {
    display: block;
    min-width: 400px;
    border-radius: 2rem !important;
    padding: 1rem;
  }

  .circle-btn {
    content: ' ';
    display: block;
    min-height: 24px;
    min-width: 24px;
    border-radius: 50%;
  }

  @media (max-width: 500px) {
    .modal-sesion {
      min-width: 90vw;
      padding: .5rem;
    }
  }
</style>
