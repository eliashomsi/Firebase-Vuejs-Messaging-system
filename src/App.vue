<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">CyberSec  <img src="./assets/logo.png"></a>
     
      <div class="navbar" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/login"> Login </router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/sign-up"> Register </router-link>
          </li>
         
           <li class="nav-item active">
            <router-link class="nav-link" to="/reset-password"> Reset </router-link>
          </li>

            <li class="nav-item active">
            <router-link class="nav-link" to="/dbdump"> DatabaseDump (must logout first) </router-link>
          </li>

         </ul>
      </div>
    </nav>
    <br>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  display:inline;
  width:4em;
  margin-right:5em;
}
li {
  float: left;
  display: inline;
  width:40%;
}
</style>
