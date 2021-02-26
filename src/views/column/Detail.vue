<template>
  <div>
    <el-card v-if="list.length>0" shadow="never">
      <div slot="header">
        <span class="has-text-weight-bold"> 📚 {{ this.$route.params.title }}</span>
      </div>
      <div>
        <article v-for="(item, index) in list" :key="index" class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="item.avatar" style="border-radius: 5px;" alt="作者">
            </figure>
          </div>
          <div class="media-content">
            <div class="">
              <p class="ellipsis is-ellipsis-1">
                <el-tooltip class="item" effect="dark" :content="item.title" placement="top">
                  <router-link :to="{name:'PostDetail',params:{id:item.id}}">
                    <span class="is-size-6">{{ item.title }}</span>

                    <el-badge
                      v-if="item.essence"
                      value="精华"
                    />
                  </router-link>
                </el-tooltip>
              </p>
              <p class="ellipsis is-ellipsis-3">
                {{ item.content }}
              </p>
            </div>
            <nav class="level has-text-grey is-mobile  is-size-7 mt-2">
              <div class="level-left">
                <div class="level-left">
                  <span v-if="item.top" class="tag has-text-link mr-1">置顶</span>

                  <router-link class="level-item" :to="{ path: `/member/${item.username}/home` }">
                    {{ item.alias }}
                  </router-link>

                  <span class="mr-1">
                    发布于:{{ dayjs(item.createTime).format("YYYY/MM/DD") }}
                  </span>

                  <span
                    v-for="(tag, index) in item.tags"
                    :key="index"
                    class="tag is-hidden-mobile is-success is-light mr-1"
                  >
                    <router-link :to="{ name: 'tag', params: { name: tag.name } }">
                      {{ "#" + tag.name }}
                    </router-link>
                  </span>

                  <span class="is-hidden-mobile">浏览:{{ item.view }}</span>
                </div>
              </div>
            </nav>
          </div>
          <div class="media-right" />
        </article>
      </div>

      <hr class="divider">
      <!--分页-->
      <pagination
        v-show="query.total > 0"
        :total="query.total"
        :page.sync="query.current"
        :limit.sync="query.size"
        @pagination="fetchList"
      />
    </el-card>

    <el-card v-else shadow="never" class="has-text-centered py-6">
      <p class="my-3">当前专栏暂未发布任何内容，联系作者催更！</p>
      <el-button size="mini" round type="success" @click="cuigeng()">催一下</el-button>
    </el-card>
  </div>
</template>

<script>
import { getPosts } from '@/api/column'
import Pagination from '@/components/Pagination/index'

export default {
  name: 'Column',
  components: { Pagination },
  data() {
    return {
      list: [],
      query: {
        title: this.$route.params.title,
        current: 1,
        size: 10,
        total: 0
      }
    }
  },
  mounted() {
    document.title = '专栏' + this.$route.params.title
  },
  created() {
    this.fetchList()
  },
  methods: {
    fetchList() {
      getPosts(this.query).then(value => {
        const { data } = value
        this.list = data.records
        this.query.current = data.current
        this.query.size = data.size
        this.query.total = data.total
      })
    },
    cuigeng() {
      setTimeout(() => {
        this.$message.info('📩 作者已收到您的催更')
      }, 0.3 * 1000)
    }
  }
}
</script>

<style scoped>

</style>
