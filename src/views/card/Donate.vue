<template>
  <el-card class="box-card" shadow="never">
    <div slot="header">
      <span>💰 支持</span>
    </div>
    <div>
      <img :src="donationImg" width="320" height="400">
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'Donate',
  data() {
    return {
      donationImg: require('@/assets/image/wxpay.jpg')
    }
  }
}
</script>

<style scoped>

</style>
