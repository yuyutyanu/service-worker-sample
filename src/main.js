import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})


navigator.serviceWorker.register('/service-worker.js',{scope: '/'})
                                .catch(console.error.bind(console))