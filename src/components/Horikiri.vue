<template>
  <div id="Horikiri">
    <h2>堀切峠</h2>
    <div>

      <img v-bind:src="horikiripht" width="450" heigt="300"/>
      <table border="1" width="500" align="center" cellspacing="0" cellpadding="1">
        <tr>
          <th bgcolor="#dcdcdc" width="100">所在地</th>
          <td><a href="https://goo.gl/maps/GDV6DJNHobM7iCby7" target="_blank">〒889-2164 宮崎県宮崎市大字折生迫</a></td>
        </tr>
        <tr>
          <th bgcolor="#dcdcdc" width="100">大学から</th>
          <td><a href="https://goo.gl/maps/mosAVMi6nM1ejCbK8" target="_blank">宮崎大学からのアクセス</a></td>
        </tr>
        <tr>
          <th bgcolor="#dcdcdc" width="100">交通アクセス</th>
          <td>バス日南線「堀切峠」下車</td>
        </tr>
        </table>
    </div>
    <br>
    
    <table border="1" width="500" align="center" cellspacing="0" cellpadding="1">
      <tr class="item" v-for="(todo, index) in horikiriOpinions" v-bind:key="index">
        <td>{{ todo.name }}</td>
      </tr>
    </table>

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
  name: 'Horikiri',
  data () {
    return {
      database: null,
      horikiriOpinionsRef: null,
      newTodoName: '',
      horikiriOpinions: [],
      horikiripht: '../img/horikiripht-1.jpg',
    }
  },

  //データベースから値の取得
  created: function() {
    this.database = firebase.database();
    //this.uid = firebase.auth().currentUser.uid;//追記 うまくいかない
    this.horikiriOpinionsRef = this.database.ref('horikiriOpinions');//refにパスを指定して値を取得
    var _this = this;
    this.horikiriOpinionsRef.on('value', function(snapshot) {
      _this.horikiriOpinions = snapshot.val(); //データに変化が起きたときに再取得する
    });
  },
  methods: {
    //DBのhorikiriOpinions/以下にデータを格納
    postOpinion: function() {
      if (this.newTodoName == "") { 
        return;
      }
      this.horikiriOpinionsRef.push({
        name: this.newTodoName,
      });
      this.newTodoName = "";
    },
  },
}
</script>

<style>
</style>