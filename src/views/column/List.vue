<template>
  <div class="columns is-multiline">
    <div v-for="(item,index) in list" :key="index" class="column is-one-quarter">
      <el-card shadow="hover" class="has-text-centered has-text-grey my-3">
        <el-image
          style="width: 100px; height: 100px;border-radius: 6px"
          src="https://www.hualigs.cn/image/600002d402e9b.jpg"
          fit="fill"
        />
        <div class="my-3">
          <p class="subtitle">{{ item.title }}</p>
          <!--          <small>1080关注，{{item.topics}}文章</small>-->
          <small>{{ item.topics }}文章</small>
        </div>
        <p class="my-3">{{ item.description }}</p>

        <router-link :to="{name:'column-detail',params:{title:item.title}}">
          <button class="button button-center is-link is-light has-text-weight-bold">
            进入专栏
          </button>
        </router-link>

      </el-card>
    </div>
  </div>
</template>

<script>
import { getList } from '@/api/column'

export default {
  name: 'Index',
  data() {
    return {
      list: [
        { thumbnail: '' }
      ],
      query: {
        column: {},
        current: 1,
        size: 10,
        total: ''
      }
    }
  },
  created() {
    this.fetchList()
  },
  methods: {
    fetchList() {
      getList(this.query).then(value => {
        console.log(value)
        const { data } = value
        this.list = data.records
        this.query.current = data.current
        this.query.total = data.total
        this.query.size = data.size
      })
    },
    view: function(cid) {
      this.$router.push({ name: 'column-detail', params: { column: cid }})
    }
  }
}
</script>

<style scoped>

</style>
