import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'


Vue.config.productionTip = false

//firebase
const firebaseConfig = {
  apiKey: "AIzaSyB_E41Rh3Iohd8WBHNRYE-HLAwQeugb388",
  authDomain: "miyazaki-tours.firebaseapp.com",
  databaseURL: "https://miyazaki-tours.firebaseio.com",
  projectId: "miyazaki-tours",
  storageBucket: "",
  messagingSenderId: "853404134015",
  appId: "1:853404134015:web:95ed3e8c22898691"
};
firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
