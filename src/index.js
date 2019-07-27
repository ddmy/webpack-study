import Vue from 'vue'
import App from './App.vue'

window.addEventListener('load',  _ => {
  new Vue({
    render: h => h(App),
  }).$mount('#app')
})
