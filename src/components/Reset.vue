<template>
  <div class="login">
    <h2>Reset Password</h2>
    <input type="text" v-model="email" placeholder="Email"><br>
    <button v-on:click="resetPassword(email)">reset</button>
    <br>
    <br>
    <span>or go back to <router-link to="/login">login</router-link>.</span>

    <div class="first"> 
      <span class="alert alert-danger" v-if="msg" > {{msg}} </span>
    </div>
  </div>
</template>

<script>
import {auth} from '../firebase'

export default {
  name: 'login',
  data: function () {
    return {
      email: '',
      password: '',
      msg: '',
      resend: false
    }
  },
  methods: {
    resetPassword: function (email) {
      auth.sendPasswordResetEmail(email).then(
        (user) => {
          this.msg = 'an email was sent to ' + this.email + ' please reset your password and then login'
          this.resend = false
        },
        (err) => {
          this.msg = err.message
        }
      )
    }
  }
}
</script>

<style scoped>  /* "scoped" attribute limit the CSS to this component only */
.login {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  cursor: pointer;
  text-align:center;
  margin: auto 0;
  margin-top: 20px;

}
p {
  margin-top: 10px;
  font-size: 15px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}

button {
  margin-top: 10px;
  width: 10%;
  cursor: pointer;
}
.first {
  margin-top: 30px;
}

</style>
