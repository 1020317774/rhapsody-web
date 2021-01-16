<template>
  <div>
    <div class="mb-5">
      <Header></Header>
    </div>

    <div class="container context">
      <transition
        name="el-fade-in-linear"
        mode="out-in"
        appear
      >
        <router-view :key="this.$route.fullPath"></router-view>
      </transition>
    </div>

    <div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export default {
  name: "App",
  components: { Header, Footer },
};
</script>

<style scoped>
.container {
  min-height: 500px;
}
</style>
