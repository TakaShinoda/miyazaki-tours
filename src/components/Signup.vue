<template>
  <div id="Singup">
    <h2>新規作成</h2>
    <!--登録フォーム-->
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <button v-on:click="signUp">登録</button>

    <!-- サインインへの遷移ボタン -->
    <p>アカウントをすでにお持ちの方
      <router-link to="/signin">ログイン</router-link>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: "Singup",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.email,
          this.password
        )
        .then(user => {
          // 成功時
          alert("Create account: " + user.user.email);
          this.$router.push("/tourlist");
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