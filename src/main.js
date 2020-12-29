// 引入 vue 文件
import App from './app.vue'
// 引入 vue 本体
import Vue from 'vue'

new Vue({
  el: '#app',
  // 指定渲染方法
  render(h) {
    // 这个函数可以接受一个形参, 是默认的渲染方法
    // 只要我们调用这个方法的时候, 加入一个组件
    // 然后返回出去, 那么我们放入的组件就会替代 el 指定的dom
    // 被渲染
    return h(App)
  }
})