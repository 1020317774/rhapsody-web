<template>
  <div class="">
    <div class="box">🔔 {{ billboard.content }}</div>

    <!--面板-->
    <Panel />

    <!--中部内容-->
    <div class="columns">
      <div class="column is-three-quarters">
        <TopicList />
      </div>

      <div class="column">
        <CardBar />
      </div>
    </div>
  </div>
</template>

<script>
import CardBar from '@/views/card/CardBar'
import PostList from '@/views/post/Index'
import Panel from '@/views/home/Panel'
import { activeUser } from '@/api/user'

import { getBillboard } from '@/api/billboard'

export default {
  name: 'Home',
  components: { TopicList: PostList, CardBar, Panel },
  data() {
    return {
      billboard: '',
      active: {
        user: this.$route.query.user,
        code: this.$route.query.code
      }
    }
  },
  created() {
    this.handleActive()
    this.fetchBillboard()
  },
  methods: {
    handleActive() {
      if (this.active.code && this.active.user) {
        activeUser(this.active).then((value) => {
          const { code, message } = value
          if (code === 200) {
            this.$message({
              message: message,
              type: 'success'
            })
          } else {
            this.$message.error(message)
          }
        })
      }
    },
    async fetchBillboard() {
      getBillboard().then((value) => {
        const { data } = value
        this.billboard = data
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
