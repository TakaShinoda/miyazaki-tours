<template>
  <div id="signin">
    <h2>ログイン</h2>
    <!-- emailとpasswordの入力欄 -->
    <div>
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <button v-on:click="signIn">ログイン</button>
    </div>

    <br>
　　 <!-- googleのアカウントでログイン -->
    <div>
      <button v-on:click="signInWithGoogle">Googleアカウントでログイン</button>
    </div>

    
    <!-- サインアップページ遷移ボタン -->
    <p>
      アカウントをお持ちではない方は =>
      <router-link to="/signup">新規作成</router-link>
    </p>

        <br />

    <!-- googleのアカウントでログイン -->
    <div>
      <button v-on:click="AnonymousSignIn">※匿名ログイン</button>
    </div>
    
  </div>
</template>

<script>
import firebase from "firebase"; 

export default {
  name: "Signin",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    // signinボタンを押したときに実行されるfunction
    signIn: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          // ログインが成功した場合にツアーリストページに遷移させる
          alert("success : " + user.user.email);
          this.$router.push("/tourlist");
        })
        .catch(error => {
          // ログインに失敗した場合
          alert(error.message);
        });
    },
 // googleでサインインするときに呼ばれるfunction
    signInWithGoogle: function() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(user => {
          alert("success : " + user.user.displayName + "さんでログインしました");
          this.$router.push("/tourlist");
        })
        .catch(error => {
            alert(error.message);
        });
    },
    //匿名ログイン
    AnonymousSignIn: function() {
       firebase
          .auth()
          .signInAnonymously()
          .then(e => {
            // ログイン成功
            console.log(e)
            alert("success : " +  "匿名でログインしました");
            this.$router.push("/tourlist");
            }).catch((error) => {
              // エラーメッセージ
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log('エラーメッセージ', errorCode, errorMessage);
              alert(errorCode, errorMessage);
            });
      }
  }
};
</script>


 
<style>
</style>