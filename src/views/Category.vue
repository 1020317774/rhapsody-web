<template>
  <div class="columns is-multiline">
    <div class="column is-one-third" v-for="(item,index) in list" :key="index">
      <section class="hero is-info colors is-bold">
        <div class="hero-body">
          <h2 class="subtitle">
            {{ item.description }}
          </h2>
        </div>
      </section>
      <article class="notification media has-background-white">
        <figure class="media-left">
              <span class="icon">
                <i :class=item.icon></i>
              </span>
        </figure>
        <div class="media-content">
          <div class="content">
            <router-link :to="{name:'category-detail',params:{name:item.name}}">
              <h1 class="title is-size-4">{{ item.name }}</h1>
            </router-link>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import {getList} from "@/api/category";

export default {
  name: "Category",
  data() {
    return {
      list: [],
      queryPage: {
        page: 1,
        size: 10
      }
    }
  },
  created() {
    this.fetchList();
  },
  methods: {
    fetchList: function () {
      getList(this.queryPage).then(value => {
        const {data} = value;
        this.queryPage.page = data.current
        this.queryPage.size = data.size
        this.list = data.records
      });
    }
  }
}
</script>

<style scoped>

.hero.colors.is-info {
  background: #36D1DC;
  background: -webkit-linear-gradient(to right, #5B86E5, #36D1DC);
  background: linear-gradient(to right, #5B86E5, #36D1DC);
}

</style>