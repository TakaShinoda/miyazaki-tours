<template>
  <div id="Singout">
    <h2>ログアウト</h2>
    <!--ログアウトボタン-->
    <button v-on:click="signOut">ログアウト</button>

  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: "Singout",

  methods: {
    signOut: function() {
        firebase
        .auth()
        .signOut()
        .then(user => {
          // 成功時
          alert("Signout account");
          this.$router.push("/");
        })
        .catch(error => {
          // 失敗時
          alert(error.message);
        });
    }
  }
};
</script>
 
<style>
</style>