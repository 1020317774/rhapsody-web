<template>
  <div>
    <Header />

    <div class="container my-4">
      <transition
        name="el-fade-in-linear"
        mode="out-in"
        appear
      >
        <router-view :key="this.$route.fullPath" />
      </transition>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'

export default {
  name: 'App',
  components: { Header, Footer }
}
</script>

<style scoped>

</style>
