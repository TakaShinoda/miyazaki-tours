<template>
  <div id="Aoshima">
    <h2>青島</h2>
    <div>

      <img v-bind:src="aoshimapht" width="450" heigt="300"/>
      <table border="1" width="500" align="center" cellspacing="0" cellpadding="1">
        <tr>
          <th bgcolor="#dcdcdc" width="100">所在地</th>
          <td><a href="https://goo.gl/maps/YD8wSRtVsN1wQBEL9" target="_blank">〒889-2162 宮崎県宮崎市青島2丁目</a></td>
        </tr>
        <tr>
          <th bgcolor="#dcdcdc" width="100">大学から</th>
          <td><a href="https://goo.gl/maps/m2F3v9yePSVYWJhY8" target="_blank">宮崎大学からのアクセス</a></td>
        </tr>
        <tr>
          <th bgcolor="#dcdcdc" width="100">現在地から</th>
          <td><a href= "https://www.google.com/maps/dir/?api=1&destination=${鬼の洗濯板}" target="_blank">現在地からのアクセス</a></td>
        </tr>
        <tr>
          <th bgcolor="#dcdcdc" width="100">交通アクセス</th>
          <td>青島駅から徒歩14分</td>
        </tr>
        </table>
    </div>
    <br />

    <table border="1" width="500" align="center" cellspacing="0" cellpadding="1">
      <tr class="item" v-for="(todo, index) in aoshimaOpinions" v-bind:key="index">
        <td>{{ todo.name }}</td>
      </tr>
    </table>
    <br />
    
    <div>
      <textarea rows="10" cols="60" v-model="newTodoName"></textarea>
      <br>
      <button type="submit" v-on:click="postOpinion">投稿</button>
    </div>
    <!--リストに戻る-->
    <p>
      <router-link to="/tourlist">戻る</router-link>
    </p>

  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Aoshima',
  data () {
    return {
      database: null,
      aoshimaOpinionsRef: null,
      newTodoName: '',
      aoshimaOpinions: [],
      aoshimapht: '../img/aoshimapht-1.jpg',
    }
  },

  //データベースから値の取得
  created: function() {
    this.database = firebase.database();
    //this.uid = firebase.auth().currentUser.uid;//追記 うまくいかない
    this.aoshimaOpinionsRef = this.database.ref('aoshimaOpinions');//refにパスを指定して値を取得
    var _this = this;
    this.aoshimaOpinionsRef.on('value', function(snapshot) {
      _this.aoshimaOpinions = snapshot.val(); //データに変化が起きたときに再取得する
    });
  },
  methods: {
    //DBのaoshimaOpinions/以下にデータを格納
    postOpinion: function() {
      if (this.newTodoName == "") { 
        return;
      }
      this.aoshimaOpinionsRef.push({
        name: this.newTodoName,
      });
      this.newTodoName = "";
    },
  },
}
</script>

<style>
</style>