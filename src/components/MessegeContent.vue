<template>
  <div class="messege">
    <br>
    <br>
    <h1  class="jumbotron" v-for="post of postRef" v-bind:key="post['.key']" v-if="post['.key'] == $route.params.id"> {{post.title}} </h1>
    <p class="alert alert-success" v-for="post of postRef" v-bind:key="post['.key']" v-if="post['.key'] == $route.params.id"> {{post.body}} </p>
    <br>
    <p><router-link to="/hello"> go back  </router-link></p>
  </div>
</template>

<script>
import {postsRef} from '../firebase'

export default {
  name: 'messege',
  data: function () {
    return {
    }
  },
  methods: {
  },
  firebase: {
    postRef: postsRef
  }
}
</script>

<style scoped>
.messege {
  margin-top: 40px;
}

p {
  padding: 1em 3em;
  display:inline-block;
  text-align:left;
  font-size:1.5em;  
}
</style>
