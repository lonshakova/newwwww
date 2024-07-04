<template>
  <div class="wrapper">
    <div class="sample">
      <div @submit.prevent v-if="!isDataSend">
        <div class="progress" >
          <div
            class="progress-bar"
            :class="'progress-bar-' + filledFields"></div>
        </div>
        <div>
          <div class="form-group">
            <label>Name</label>
            <span v-if="firstClickName">
              <span
                class="mdi mdi-alert-circle"
                style="color: red"
                v-if="!NameCorrect"></span>
              <span
                class="mdi mdi-checkbox-marked-circle"
                style="color: green"
                v-if="NameCorrect"></span>
            </span>
            <input
              type="text"
              class="form-control"
              v-model="info[0].value"
              @keyup.once="firstClickName = !firstClickName" />
            <label>Phone</label>
            <span v-if="firstClickPhone">
              <span
                class="mdi mdi-alert-circle"
                style="color: red"
                v-if="!PhoneCorrect"></span>
              <span
                class="mdi mdi-checkbox-marked-circle"
                style="color: green"
                v-if="PhoneCorrect"></span
            ></span>
            <input
              type="text"
              class="form-control"
              v-model="info[1].value"
              @keyup.once="firstClickPhone = !firstClickPhone" />
            <label>Email</label>
            <span v-if="firstClickEmail">
              <span
                class="mdi mdi-alert-circle"
                style="color: red"
                v-if="!EmailCorrect"></span>
              <span
                class="mdi mdi-checkbox-marked-circle"
                style="color: green"
                v-if="EmailCorrect"></span
            ></span>
            <input
              type="text"
              class="form-control"
              v-model="info[2].value"
              @keyup.once="firstClickEmail = !firstClickEmail" />
            <label>Some Field 1</label>
            <span v-if="firstClickField1">
              <span
                class="mdi mdi-alert-circle"
                style="color: red"
                v-if="!Field1Correct"></span>
              <span
                class="mdi mdi-checkbox-marked-circle"
                style="color: green"
                v-if="Field1Correct"></span
            ></span>
            <input
              type="text"
              class="form-control"
              v-model="info[3].value"
              @keyup.once="firstClickField1 = !firstClickField1" />
            <label>Some Field 2</label>
            <span v-if="firstClickField2">
              <span
                class="mdi mdi-alert-circle"
                style="color: red"
                v-if="!Field2Correct"></span>
              <span
                class="mdi mdi-checkbox-marked-circle"
                style="color: green"
                v-if="Field2Correct"></span
            ></span>
            <input
              type="text"
              class="form-control"
              v-model="info[4].value"
              @keyup.once="firstClickField2 = !firstClickField2" />
          </div>
        </div>
        <button
          class="btn"
          @click="isDataSend = true">
          Send Data
        </button>
      </div>
      <div v-if="isDataSend">
        <table class="table table-bordered">
          <tbody>
            <tr>
              <td class="td">Name</td>
              <td class="td">{{this.info[0].value}}</td>
            </tr>
            <tr>
              <td class="td">Phone</td>
              <td class="td">{{this.info[1].value}}</td>
            </tr>
            <tr>
              <td class="td">Email</td>
              <td class="td">{{this.info[2].value}}</td>
            </tr>
            <tr>
              <td class="td">Field1</td>
              <td class="td">{{this.info[2].value}}</td>
            </tr>
            <tr>
              <td class="td">Field2</td>
              <td class="td">{{this.info[3].value}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        firstClickName: false,
        firstClickPhone: false,
        firstClickEmail: false,
        firstClickField1: false,
        firstClickField2: false,
        isDataSend: false,
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
      };
    },
    computed: {
      NameCorrect() {
        return this.info[0].pattern.test(this.info[0].value);
      },
      PhoneCorrect() {
        return this.info[1].pattern.test(this.info[1].value);
      },
      EmailCorrect() {
        return this.info[2].pattern.test(this.info[2].value);
      },
      Field1Correct() {
        return this.info[3].pattern.test(this.info[3].value);
      },
      Field2Correct() {
        return this.info[4].pattern.test(this.info[4].value);
      },
      filledFields() {
        let count = 0;
        if (this.NameCorrect) {
          count++;
        }
        if (this.PhoneCorrect) {
          count++;
        }
        if (this.EmailCorrect) {
          count++;
        }
        if (this.Field1Correct) {
          count++;
        }
        if (this.Field2Correct) {
          count++;
        }
        return count;
      },
    },
    methods: {

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
  .progress-bar-0 {
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
