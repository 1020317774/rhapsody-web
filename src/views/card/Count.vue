<template>
  <el-card class="box-card" shadow="hover">
    <div slot="header">
      <span>☕ 统计</span>
    </div>
    <div>
      <ul>
        <li class="mb-3">社区会员: {{ count.user }} 人</li>
        <li class="mb-3">在线人数: {{ websocketData.data }} 人</li>
        <li class="mb-3">主题数: {{ count.topic }} 个</li>
        <li class="mb-3">回帖数: {{ count.comment }} 条</li>
      </ul>
    </div>
  </el-card>
</template>

<script>
import { getToken } from '@/utils/auth'
import { getCount } from '@/api'

export default {
  name: 'Count',
  data() {
    return {
      count: {},
      path: 'ws://127.0.0.1:10000/websocket/site/stats',
      socket: '',
      online: Number,
      websocketData: {},
      token: getToken()
    }
  },
  mounted() {
    // 初始化
    // this.init()
  },
  destroyed() {
    // 销毁监听
    // this.socket.onclose = this.onclose
  },
  methods: {
    init: function() {
      if (typeof (WebSocket) === 'undefined') {
        alert('您的浏览器不支持socket')
      } else {
        // 实例化socket
        // if (null != this.token && '' !== this.token) {
        //   this.socket = new WebSocket("ws://127.0.0.1:9999/websocket/online/" + this.token);
        // } else {
        //   this.socket = new WebSocket("ws://127.0.0.1:9999/websocket/online/" + new Date().getSeconds());
        // }
        this.socket = new WebSocket(this.path)
        // 监听socket连接
        this.socket.onopen = this.onopen
        // 监听socket错误信息
        this.socket.onerror = this.onerror
        // 监听socket消息
        this.socket.onmessage = this.onmessage
        this.socket.onclose = this.onclose

        getCount().then(value => {
          const { data } = value
          this.count = data
        })
      }
    },
    onopen: function() {
      // let self = this;
      // setInterval(() => {
      //   console.log("发送心跳");
      //   let ping = {websocketType: "ping"};
      //   self.send(JSON.stringify(ping));
      // }, 10000);
    },
    onerror: function() {
      console.log('websocket发生了错误')
    },
    onmessage: function(msg) {
      this.websocketData = JSON.parse(msg.data)
      console.log(this.websocketData.data)
      // 发现消息进入    开始处理前端触发逻辑
    },
    onclose: function() {
      console.log('socket已经关闭')
    },
    send: function(msg) {
      this.socket.send(msg)
    }
  }
}
</script>

<style scoped>

</style>
