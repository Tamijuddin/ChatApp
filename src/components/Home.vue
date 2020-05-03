<template>
  <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand class="heading">CHAT-APP</b-navbar-brand>
      </b-navbar><br><br>
    <div class="user-info">
      <b-card border-variant="success" align="center" header="Create Chat Room" header-text-variant="white" header-bg-variant="dark">
          <b-form v-on:submit.prevent="enterChat">
          <b-form-input class="mb-2 mr-sm-2 mb-sm-0" v-model="name" required placeholder="Enter username"></b-form-input><br>
          <b-button type="submit" variant="success" style="padding:10px">Enter chat room</b-button>
          </b-form>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name : 'Home',

  data() {
    return{
      name:null
    }
  },
  methods:{
    enterChat(){
      if(this.name){
        this.$router.push({ name: 'Chat', params: { name: this.name }});
        this.feedback = null;
        console.log(this.name)
      }
    }
  }
}
</script>

<style >
.user-info{
  margin: 20px 20px;
  padding: 10px 0px 10px 0px
}
.heading{
  font: bolder;
  font-style: italic;
  font-family: serif;
  font-stretch: initial;
}
</style>