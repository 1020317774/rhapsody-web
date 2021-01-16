<template>
  <el-card class="box-card" shadow="never">
    <div slot="header">
      <span>🕺 友链</span>
    </div>
    <div>
      <a v-for="(fl,index) in friendLinks" :key="index" :href="fl.link" title="V2ex" target="_blank">
        <img class="mb-2" :src="fl.icon">
      </a>
    </div>
  </el-card>
</template>

<script>

import { getFriendLinkList } from '@/api/friendLink'

export default {
  name: 'Links',
  data() {
    return {
      friendLinks: []
    }
  },
  created() {
    this.fetchFriendLinks()
  },
  methods: {
    fetchFriendLinks() {
      getFriendLinkList().then(response => {
        this.friendLinks = response.data
      })
    }
  }
}
</script>

<style scoped>

</style>
