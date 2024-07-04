<template>
  <div class="btns">
    <button class="btn transition" @click="this.$router.push('/')"><span class="mdi mdi-close-circle-outline"></span></button>
    <button class="btn transition" @click="this.$router.push('/1')">1</button>
    <button class="btn transition" @click="this.$router.push('/2_1')">2.1</button>
    <button class="btn transition" @click="this.$router.push('/2_2')">2.2</button>
    <button class="btn transition" @click="this.$router.push('/3_1')">3.1</button>
    <button class="btn transition" @click="this.$router.push('/3_2')">3.2</button>
    <button class="btn transition" @click="this.$router.push('/4')">4</button>
    <button class="btn transition" @click="this.$router.push('/5')">5</button>
    <button class="btn transition" @click="this.$router.push('/6')">6</button>
    <button class="btn transition" @click="this.$router.push('/7')">7</button>
  </div>
  
</template>

<script setup>
</script>

<style scoped>
.btns{
  display: flex;
  justify-content: center;
}

.btn{
  margin: 50px 40px;
  height: 50px;
  width: 50px;
  background-color:darkcyan;
  color: white;
  font-weight: bolder;
  font-size: large;
  border-radius: 20px;
}
.btn:hover{
  margin: 25px 15px;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  font-size: xx-large;
}
.transition {
  transition: 0.6s;
}
</style>
