<template>
  <div class="wrapper">
    <div class="sample">
      <form v-if="!isAgreed">
        <div class="content alert alert-info"  @scroll="onScroll">
          <div v-for="i of 15">
            <p>This text no one reads. This text no one reads. This text no one reads.</p>
          </div>
        </div>
        <div class="checks" v-if="isItScroll">
          <div class="form-check">
            <label class="form-check-label">
              <input
                class="form-check-input"
                type="checkbox"
                value="text"
                v-model="checkValues">
                I agree this text
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input
                class="form-check-input"
                type="checkbox" 
                value="spam"
                v-model="checkValues"/>
              Send me spam
            </label>
          </div>
        </div>
        <div class="radios" v-if="isSpamCheck">
          <div class="form-check">
            <label class="form-check-label">
              <input
                class="form-check-input"
                type="radio"
                value="phone"
                v-model="radioValue">
                Send me spam on phone
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input
                class="form-check-input"
                type="radio"
                value="email"
                v-model="radioValue" />
                Send me spam on email
            </label>
          </div>
        </div>
        <button class="btn" v-if="isCheckCorrect" @click="isAgreed=!isAgreed">Send Data</button>
      </form>
      <div v-if="isAgreed">
        <table class="table table-bordered">
          <tbody>
            <tr>
              <td class="td">Agree Text</td>
              <td class="td" v-if="this.checkValues.find((item)=>item=='text')">Yes</td>
              <td class="td" v-else>No</td>
            </tr>
            <tr>
              <td class="td">Get Spam</td>
              <td class="td" v-if="this.checkValues.find((item)=>item=='spam')">Yes</td>
              <td class="td" v-else>No</td>
            </tr>
            <tr v-if="this.checkValues.find((item)=>item=='spam')">
              <td class="td">Spam On</td>
              <td class="td">{{radioValue}}</td>
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
        checkValues:[],
        radioValue: null,
        isItScroll:false,
        isAgreed: false,
      };
    },
    computed: {
      isSpamCheck(){
        return this.checkValues.find((item)=>item=='spam');
      },
      isCheckCorrect(){
        return this.checkValues.find((item)=>item=='text')&&((!this.checkValues.find((item)=>item=='spam'))||(this.checkValues&&this.radioValue));
      }
    },
    methods: {
      onScroll ({ target: { scrollTop, clientHeight, scrollHeight }}) {
      if (scrollTop + clientHeight >= scrollHeight) {
        this.isItScroll=!this.isItScroll;
      }
    },
  },
   
  };
</script>

<style scoped>
*{margin-top:10px;}
.wrapper{
  display: flex;
  justify-content: center;
}
.content{
  height: 400px;
  width: 700px;
  overflow-y:scroll;
}
.btn {
  background-color: darkcyan;
  color: white;
  font-weight: bolder;
}
</style>
