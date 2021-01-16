<template>
  <el-card class="box-card" shadow="hover">
    <div slot="header">
      <span>💖 开源项目</span>
    </div>
    <div />
  </el-card>
</template>

<script>
import Vditor from 'vditor'
import 'vditor/dist/index.css'

export default {
  name: 'OpenSource',
  created() {
    this.renderMarkdown()
  },
  methods: {
    renderMarkdown() {
      Vditor.preview(document.getElementById('preview')
      )
    }
  }
}
</script>

<style scoped>

</style>
