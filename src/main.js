import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/serviceworker.js',{scope: '/'});
}