<template>
  <div class="columns is-hidden-mobile is-multiline has-text-centered">
    <div class="column is-one-quarter">
      <router-link :to="{path:'/journey'}">
        <section class="box my-card hero is-success">
          <i class="fa fa-plane fa-4x"></i>
          <p class="subtitle mt-5">旅行</p>
        </section>
      </router-link>
    </div>

    <div class="column is-one-quarter">
      <router-link :to="{path:'/activities'}">
        <section class="box my-card hero is-warning">
          <i class="fa fa-file-sound-o fa-4x"></i>
          <p class="subtitle mt-5">活动</p>
        </section>
      </router-link>
    </div>

    <div class="column is-one-quarter">
      <router-link :to="{path:'/idle'}">
        <section class="box my-card hero is-info">
          <i class="el-icon-help fa-4x"></i>
          <p class="subtitle mt-5">圆桌派</p>
        </section>
      </router-link>
    </div>

    <div class="column is-one-quarter">
      <router-link :to="{ path: '/columns' }">
        <section class="box my-card hero is-danger">
          <i class="fa fa-cube fa-4x"></i>
          <p class="subtitle mt-5">优质专栏</p>
        </section>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Panel'
}
</script>

<style scoped>
</style>
