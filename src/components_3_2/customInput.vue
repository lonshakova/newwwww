<template>
  <div
    class="form-group"
    v-for="(item, index) in info">
    <label>{{ item.name }}</label>
    <span
      class="mdi"
      v-if="controls[index].activated"
      :class="
        controls[index].error ? 'mdi-alert-circle' : 'mdi-checkbox-marked-circle'"
      :style="controls[index].error ? 'color: red' : 'color: green'">
    </span>
    <input
      type="text"
      class="form-control"
      :value="item.value"
      @input="onInput(index, $event.target.value)" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: [
        {
          name: "Name",
          value: "",
          pattern: /^[a-zA-Z ]{2,30}$/,
        },
        {
          name: "Phone",
          value: "",
          pattern: /^[0-9]{7,14}$/,
        },
        {
          name: "Email",
          value: "",
          pattern: /.+/,
        },
        {
          name: "Some Field 1",
          value: "",
          pattern: /.+/,
        },
        {
          name: "Some Field 2",
          value: "",
          pattern: /.+/,
        },
      ],
      controls: [],
      formSubmited: false,
    };
  },
}
</script>

<style></style>
