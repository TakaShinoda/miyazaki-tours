<template>
  <div id="app">
    <h1>ひなた掲示板</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted: function(){
		document.title = "ひなた掲示板";
    document.querySelector("meta[property='description']").setAttribute('content', "宮崎県の観光地口コミサイトです");
	},
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
