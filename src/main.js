// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.component('my-title', {
  props: ['message'],
  template: '<div class="cover-heading"><h1>{{ message }}</h1></div>'
})

Vue.component('my-video', {
  props: ['title'],
  template: `
    <div class="easyhtml5video" style="position:relative;max-width:1280px;">
      <video controls="controls" v-bind:poster="'/src/assets/videos/' + title + '.jpg'" style="width:100%" :title="title">
        <source v-bind:src="'/src/assets/videos/' + title +'.m4v'" type="video/mp4">
        <source v-bind:src="'/src/assets/videos/' + title +'.webm'" type="video/webm">
        <source v-bind:src="'/src/assets/videos/' + title +'.ogv'" type="video/ogg">
      </video>
    </div>`
})

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
