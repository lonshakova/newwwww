<template>
  <HeaderMenu v-if="true"/>
  <router-view/>
</template>

<script>
import HeaderMenu from './components/HeaderMenu.vue';
export default {
  components:{
    HeaderMenu
  },
};
</script>

<style scoped>

</style>
