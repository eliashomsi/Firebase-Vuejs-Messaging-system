<template>
  <div class="login">
    <h2>Sign In</h2>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button v-on:click="signIn">Connection</button>
    <p class="first">You don't have an account ? You can <router-link to="/sign-up">create one</router-link></p>
    <p>Forgot your password? You can password <router-link to="/reset-password">reset password </router-link></p>
    <div > 
      <span class="alert alert-danger" v-if="msg"> {{msg}} </span>
      <button v-if="resend" v-on:click="sendVerificationEmail"> resend verification  </button>
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
      resetEmail: '',
      password: '',
      msg: '',
      resend: false
    }
  },
  methods: {
    signIn: function () {
      this.email = this.email.trim()
      this.password = this.password.trim()
      auth.signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          if (user.emailVerified) {
            this.$router.replace('hello')
          } else {
            this.msg = 'please verify your email'
            this.resend = true
          }
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
          this.resend = false
        },
        (err) => {
          this.msg = err.message
        }
      )
    },
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

.first {
  margin-top: 30px;
}

button {
  margin-top: 10px;
  width: 10%;
  cursor: pointer;
}

</style>
