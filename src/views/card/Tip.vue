<template>
  <el-card class="box-card" shadow="never">
    <div slot="header">
      <span>🥳 每日一句</span>
    </div>
    <div>
      <div class="has-text-left block">
        {{ tip.content }}
      </div>
      <div class="has-text-right mt-5 block">
        ——{{ tip.author }}
      </div>
    </div>
  </el-card>
</template>

<script>
import { getTodayTip } from '@/api/tip'

export default {
  name: 'Tip',
  data() {
    return {
      tip: {},
      type: 1
    }
  },
  created() {
    this.fetchTodayTip()
  },
  methods: {
    fetchTodayTip() {
      getTodayTip(this.type).then(response => {
        const { data } = response
        this.tip = data
      })
    }
  }
}
</script>

<style scoped>

</style>
