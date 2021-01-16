<template>
  <section id="author">
    <el-card class="" shadow="never">
      <div slot="header">
        <span class="has-text-weight-bold">👨‍💻 关于作者</span>
      </div>
      <div class="has-text-centered">
        <p class="is-size-5 mb-5">
          <router-link :to="{ path: `/member/${user.username}/home` }">
            {{ user.alias }} <span class="is-size-7 has-text-grey">{{ '@' + user.username }}</span>
          </router-link>
        </p>
        <div class="columns is-mobile">
          <div class="column is-one-third">
            <code>{{ user.topicCount }}</code>
            <p>文章</p>
          </div>
          <div class="column is-one-third">
            <code>{{ user.columns }}</code>
            <p>专栏</p>
          </div>
          <div class="column is-one-third">
            <code>{{ user.followerCount }}</code>
            <p>粉丝</p>
          </div>
        </div>
        <div>
          <button
            v-if="hasFollow"
            class="button is-success button-center is-fullwidth"
            @click="handleUnFollow(user.id)"
          >
            已关注
          </button>

          <button v-else class="button is-link button-center is-fullwidth" @click="handleFollow(user.id)">
            关注
          </button>
        </div>
      </div>
    </el-card>
  </section>
</template>

<script>
import { follow, hasFollow, unFollow } from '@/api/follow'

export default {
  name: 'Author',
  props: {
    user: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      hasFollow: false
    }
  },
  created() {
    this.fetchInfo()
  },
  methods: {
    fetchInfo() {
      hasFollow(this.user.id).then(value => {
        const { data } = value
        this.hasFollow = data.hasFollow
      })
    },
    handleFollow: function(id) {
      follow(id).then(response => {
        const { message } = response
        this.$message.success(message)
        this.hasFollow = !this.hasFollow
        this.user.followerCount = parseInt(this.user.followerCount) + 1
      })
    },
    handleUnFollow: function(id) {
      unFollow(id).then(response => {
        const { message } = response
        this.$message.success(message)
        this.hasFollow = !this.hasFollow
        this.user.followerCount = parseInt(this.user.followerCount) - 1
      })
    }
  }
}
</script>

<style scoped>

</style>
