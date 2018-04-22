<template>
  <div class="sign-up">
    <br>
    <br>
    <h2>Let's create a new account !</h2>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button v-on:click="signUp">Sign Up</button>
    <span>or go back to <router-link to="/login">login</router-link>.</span>
    <div > 
      <span class="alert alert-danger" v-if="msg" > {{msg}} </span>
      <button v-if="resend" v-on:click="sendVerificationEmail"> resend verification </button>
    </div>
  </div>
</template>

<script>
import {auth, db} from '../firebase'

export default {
  name: 'signUp',
  data: function () {
    return {
      email: '',
      password: '',
      msg: '',
      resend: false
    }
  },
  methods: {
    signUp: function () {
      this.email = this.email.trim()
      this.password = this.password.trim()
      auth.createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.sendVerificationEmail()
          let emails = db.ref('emails')
          emails.push({ 'name': this.email })
        },
        (err) => {
          this.msg = err.message
        }
      )
    },
    sendVerificationEmail: function () {
      auth.currentUser.sendEmailVerification().then(
        (user) => {
          this.msg = 'an email was sent to ' + this.email + ' please verify your email and then login'
          this.resend = true
        },
        (err) => {
          this.msg = err.message
        }
      )
    }
  }
}
</script>

<style scoped>
.signUp {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 10px;
  width: 10%;
  cursor: pointer;
}
span {
  display: block;
  margin-top: 20px;
  font-size: 15px;
}
</style>
