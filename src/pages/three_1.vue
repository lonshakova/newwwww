<template>
<div class="timers">
  <div v-timer:1000.5>1</div>
  <div v-timer:1000.5.run>2</div>
  <div v-timer:1000>3</div>
</div>
</template>

<script>
const timer = {
  mounted: (el,binding) => {
    let sizee = 20;
    let keyNames = Object.keys(binding.modifiers);
    let count = +keyNames[0];
    let i = 0;
    if (binding.modifiers.run) { sizee += 10; i++};
    if (!count) {
      setInterval(() => {
        sizee += 10; el.style.fontSize = sizee + "px"; i++;
      }, binding.arg)
     };
    let timerId = setInterval(() => {
      sizee += 10; el.style.fontSize = sizee + "px"; i++;
      if (i == count) {
        clearInterval(timerId);
      }
    }, binding.arg)
    
}
}

export default {
  data() {
    return {
      data: null,
    }
},
directives: {
  timer
  }
};
</script>

<style>
.timers{
  font-size: 20px;
}
</style>