<template>
  <div class="wrapper">
    <div class="sample">
      <form @submit.prevent="formSubmited = true" v-if="!formSubmited">
        <div class="progress">
          <div class="progress-bar" :style="progressWidth"></div>
        </div>
        <div>
          <customInput/>
        </div>
        <button class="btn" :disabled="done < info.length">
          Send Data
        </button>
      </form>
      <div v-else>
        <table class="table table-bordered">
          <tr v-for="(item, index) in info">
            <td>{{ item.name }}</td>
            <td>{{ item.value }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import customInput from "../components_3_2/customInput.vue";
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
  components: {
    customInput
  },
  created() {
    for (let i = 0; i < this.info.length; i++) {
      this.controls.push({
        error: !this.info[i].pattern.test(this.info[i].value),
        activated: this.info[i].value != "",
      });
    }
  },
  methods: {
    onInput(index, value) {
      let data = this.info[index];
      let control = this.controls[index];

      data.value = value;
      control.error = !data.pattern.test(value);
      control.activated = true;
    },
  },
  computed: {
    done() {
      let done = 0;

      for (let i = 0; i < this.controls.length; i++) {
        if (!this.controls[i].error) {
          done++;
        }
      }

      return done;
    },
    progressWidth() {
      return {
        width: (this.done / this.info.length) * 100 + "%",
      };
    },
  },
};
</script>

<style scoped>
* {
  margin: 5px;
}

.wrapper {
  padding: 15px;
  max-width: 500px;
  margin: 0 auto;
}

.progress-bar {
  margin: 0;
  width: 0%;
  height: 100%;
  background-color: darkcyan;
}

.progress-bar-1 {
  margin: 0;
  width: 20%;
  height: 100%;
  background-color: darkcyan;
}

.progress-bar-2 {
  margin: 0;
  width: 40%;
  height: 100%;
  background-color: darkcyan;
}

.progress-bar-3 {
  margin: 0;
  width: 60%;
  height: 100%;
  background-color: darkcyan;
}

.progress-bar-4 {
  margin: 0;
  width: 80%;
  height: 100%;
  background-color: darkcyan;
}

.progress-bar-5 {
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: darkcyan;
}

.btn {
  background-color: darkcyan;
  color: white;
  font-weight: bolder;
}
</style>
