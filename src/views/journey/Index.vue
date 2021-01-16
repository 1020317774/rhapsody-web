<template>
  <section class="has-text-centered">
    <div class="columns">
      <div class="column is-12">
        <div class="columns is-multiline">
          <div
            v-for="(item, index) in list"
            :key="index"
            class="column is-one-quarter"
          >
            <div class="card rb-card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="item.img">
                </figure>
              </div>
              <div class="card-content">
                <h3
                  class="title is-size-6 ellipsis is-ellipsis-1"
                  :title="item.title"
                >
                  {{ item.title }}
                </h3>
                <h4 class="subtitle is-size-7 ellipsis is-ellipsis-2 mt-3">
                  {{ item.location }}
                  <el-divider direction="vertical" />
                  {{ dayjs(item.createTime).format("YYYY/MM/DD HH:mm:ss") }}
                </h4>
                <button
                  class="button is-info is-light mr-1 has-text-weight-bold"
                  @click="view(item.id)"
                >
                  查看
                </button>
                <button
                  class="button is-info is-light ml-1 has-text-weight-bold"
                  @click="like(item.id)"
                >
                  点赞
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getList } from '@/api/journey'

export default {
  name: 'Journey',
  data() {
    return {
      list: []
    }
  },
  created() {
    this.fetchList()
  },
  methods: {
    fetchList: function() {
      getList().then((value) => {
        const { data } = value
        this.list = data
      })
    },
    view: function(id) {
      this.$router.push({ name: 'journey-detail', params: { id: id }})
    },
    like: function(id) {
      // 点赞文章
      this.$notify({
        title: '',
        message: '感谢您的支持  (✪ω✪)',
        type: 'success'
      })
    }
  }
}
</script>

<style scoped>
@import "../../assets/daily/daily.css";
</style>
