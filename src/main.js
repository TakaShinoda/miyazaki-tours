import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'


Vue.config.productionTip = false

//firebase
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
