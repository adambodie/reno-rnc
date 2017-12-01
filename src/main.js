// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.component('my-title', {
  props: ['message'],
  template: '<div class="cover-heading jumbotron"><h1>{{ message }}</h1></div>'
})
/* Vue.component('my-carousel', {
  props: ['title', 'name'],
  template: '<div><h2>{{title}}</h2><img data-src="\'./src/assets/images/{{name}}.jpg\'" class=\'img-responsive\'></div>'
}) */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

new Vue({
  el: '#title'
})

/* new Vue({
  el: '#my-carousel'
}) */
