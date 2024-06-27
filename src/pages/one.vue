<template>
  <div>
    <div class="form" v-if="!isDone">
      <div class="title-witw-text">
        <div class="text">Email</div>
        <input type="text" v-model="email">
      </div>
      <div class="title-witw-text">
        <div class="text">First Name</div>
        <input type="text" v-model="firstName">
      </div>
      <div class="title-witw-text">
        <div class="text">Last Name</div>
        <input type="text" v-model="lastName">
      </div>
      <div class="title-witw-text">
        <div class="text">Phone</div>
        <input type="text" v-model="phone">
      </div>
      <div class="add-guests" @click="guests++">
        Guests &nbsp<button class="btn">+</button>
      </div>
      <div class="guests">
        <div class="guest" v-for="guest in guests">
          <div class="title-witw-text">
            <div class="text" @dblclick="deleteGuest(guest - 1)">Guest {{ guest }}</div>
            <input type="text" v-model="guestNames[guest - 1]">
          </div>
        </div>
      </div>
      <button class="btn" @click="isDone=!isDone">Send Data</button>
    </div>
    <div class="invitation" v-if="isDone">
      <h1 class="all-done">All done!!</h1>
      <table class="table">
        <tbody>
          <tr>
            <td class="td">Email</td>
            <td class="td">{{email}}</td>
          </tr>
          <tr>
            <td class="td">Name</td>
            <td class="td">{{firstName}}&nbsp{{lastName}}</td>
          </tr>
          <tr>
            <td class="td">Phone</td>
            <td class="td">{{phone}}</td>
          </tr>
          <tr>
            <td class="td">Guests</td>
            <td class="td">
              <div v-for="guest in guestNames"><div>{{guest}}</div></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      guests: 0,
      guestNames: [],
      isDone: false, 
      email:'',
      firstName:'',
      lastName:'',
      phone:'',
    };
  },
  methods:{
    deleteGuest(guest) {
      this.guestNames.splice(guest, 1);
      this.guests--;
    }
  }
};
</script>

<style scoped>
.form{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.title-witw-text{
  margin: 5px;
}
.add-guests{
  margin: 10px;
  width: 190px;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
}
.btn{
  background-color:darkcyan;
  color: white;
  font-weight: bolder;
}
.invitation{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.all-done{
  margin:5px;
  font-weight: bolder;
  font-size: 80px;
}
.table{
  width: 500px;
  border: 1px solid rgb(0, 0, 0);
}
.td{
  border: 1px solid rgb(0, 0, 0);
}
</style>
