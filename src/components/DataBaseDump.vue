<template>
  <div class="dbdump">
    {{postRef}}
  </div>
</template>

<script>
import {postsRef} from '../firebase'

export default {
  name: 'dbdump',
  firebase: {
    postRef: postsRef
  },
  data: function () {
    return {
      email: '',
      password: '',
      msg: '',
      resend: false
    }
  },
  methods: {
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
