<template>
  <div class="hello">
    <div class="page-header">
      <h3> {{ msg }} </h3>
      <span class="alert alert-danger" v-if="err" > {{err}} </span>
    </div>

    <br>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3> Add Post </h3>
      </div>
      <div class="panel-body">
        <form id="form" class="form-inline">
          <div class="form-group">
            <label for="to2"> to:</label>
            <autocomplete
               id="to2"
               :source="emailsAutoComplete"
               placeholder="Search Email"
               class="form-control"
               results-property="data"
               :results-display="formattedDisplay"
               ref="autocomplete"
               @selected="addValue">
            </autocomplete>
            <input type="text" id="to2" value="" class="form-control" v-model="newPost.to" readonly>
          </div>
          
          <div class="form-group">
            <label for="title2"> title:</label>
            <input type="text" id="title2" value="" class="form-control" v-model="newPost.title">
          </div>

          <div class="form-group">
            <label for="body2"> body:</label>
            <input type="text" id="body2" value="" class="form-control" v-model="newPost.body">
          </div>

          <div class="form-group">
            <button v-on:click="writeNewPost(newPost)" class="form-control"> write </button>
          </div>
        </form>
      </div>
    </div>
    <br>
    <br>

    <div class="panel panel-default">
      <div class="panel-heading">
        <h3> List of Messeges Sent:  </h3>
      </div>

      <div class="panel-body">
        <table class="table table-stripped">
          <thead>
            <tr>
              <th>
                To
              </th>
              <th>
                Title
              </th>
              <th>
                Body
              </th>
               <th>
                Date
              </th>
              <th>
                Remove
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="post of posts" v-bind:key="post['.key']" v-if= "currentAuthor == post.author">
              <td> {{post.to}} </td>
              <td> {{post.title}} </td>
              <td> <router-link :to="{ name: 'MessegeContent', params: { id: post['.key'] }}"> click here to see messege body</router-link> </td>
              <td> {{post.date}} </td>
              <td> <span  class="closeSign" v-on:click="deletePostUsingKey(post['.key'])"> &times; </span> </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="panel panel-default">
      <div class="panel-heading">
        <h3> List of Messeges Received:  </h3>
      </div>

      <div class="panel-body">
        <table class="table table-stripped">
          <thead>
            <tr>
              <th>
                From
              </th>
              <th>
                Title
              </th>
              <th>
                Body
              </th>
               <th>
                Date
              </th>
              <th>
                Remove
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="post of posts" v-bind:key="post['.key']" v-if= "currentAuthor == post.to">
              <td > {{post.author}} </td>
              <td> {{post.title}} </td>
              <td> <router-link :to="{ name: 'MessegeContent', params: { id: post['.key'] }}"> click here to see messege body</router-link> </td>
              <td> {{post.date}} </td>
              <td> <span  class="closeSign" v-on:click="deletePostUsingKey(post['.key'])"> &times; </span> </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <button v-on:click="logout">Logout </button>

 
  </div>
</template>

<script>
// firebase
import {auth, db, postsRef} from '../firebase'

// autocomplete
import Autocomplete from 'vuejs-auto-complete'

export default {
  name: 'hello',
  components: { Autocomplete },
  firebase: {
    posts: postsRef,
    emailsAutoComplete: db.ref('emails')
  },
  data () {
    return {
      msg: 'Hello ' + auth.currentUser.email,
      newPost: {to: '', title: '', body: ''},
      err: '',
      currentAuthor: auth.currentUser.email
    }
  },
  methods: {
    logout: function () {
      auth.signOut().then(() => {
        this.$router.replace('login')
      })
    },
    addValue: function (value) {
      this.newPost.to = value.display
      this.$refs.autocomplete.clearValues()
    },
    isEmpty: function (str) {
      return (!str || str.length === 0)
    },
    formattedDisplay: function (result) {
      return result.name
    },
    getDateNow: function () {
      var currentdate = new Date()
      var res = currentdate.getDate() +
                '/' + (currentdate.getMonth() + 1) +
                '/' + currentdate.getFullYear() +
                ' @ ' + currentdate.getHours() +
                ':' + currentdate.getMinutes() +
                ':' + currentdate.getSeconds()
      return res
    },
    writeNewPost: function (newPost) {
      let currentUser = auth.currentUser
      let uid = currentUser.uid
      let email = currentUser.email
      // A post entry.
      var postData = {
        to: newPost.to,
        author: email,
        uid: uid,
        body: newPost.body,
        title: newPost.title,
        date: this.getDateNow()
      }

      // check if author == to
      if (email === newPost.to) {
        this.err = 'cannot send messege to self'
        return
      }
      // check if empty data
      if (this.isEmpty(newPost.to) || this.isEmpty(newPost.title) || this.isEmpty(newPost.body)) {
        this.err = 'some elements are missing from the msg'
        return
      }

      postsRef.push(postData)
      // reset
      this.newPost = {to: '', title: '', body: ''}
      this.err = ''
    },
    deletePostUsingKey: function (key) {
      postsRef.child(key).remove()
    },
    getData (obj) {
      console.log(obj)
    }
  }
}
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
  font-weight: normal;
}
form {
  margin: auto 0;
}
.panel-body {
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}

.form-control {
  margin-left: 2em;
}
.form-group {
  margin-left: 2em;
}
li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

#body2 {
  width: 30em;
}

.closeSign{
  color:red;
  font-size: 1.5em;
  font-weight: bolder;
  cursor: pointer;
}
</style>
