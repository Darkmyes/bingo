<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style lang="scss">
  .btn-jugar-wrapper {
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-width: 250px;
    min-height: 200px;
    background-size: 250px;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('~assets/tablas_bingo.png');
  }
</style>
