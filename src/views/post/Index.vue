<template>
  <div>
    <el-card shadow="never">
      <b-tabs v-model="activeTab">
        <b-tab-item
          v-if="true"
          key="all"
          value="all"
          label="全部"
        >
          <div v-for="(item, index) in allPost" :key="index" class="my-2">
            <div class="columns">
              <div class="column is-one-fifth">
                <figure class="image is-4by3">
                  <img src="https://api.mz-moe.cn/img.php" alt="Placeholder image">
                </figure>
              </div>
              <div class="column content">
                <div class="is-size-5 ellipsis is-ellipsis-1">
                  <router-link :to="{name:'PostDetail',params:{id:item.id}}">
                    {{ item.title }}
                  </router-link>
                </div>
                <div class="mt-1 ellipsis is-ellipsis-2 has-text-grey" style="min-height: 33px">
                  {{ item.content }}
                </div>
                <div class="has-text-grey mt-3">
                  <i class="fa fa-user"></i>&nbsp;
                  <router-link class="has-text-grey" :to="{ name:'UserCenter',params: {username:item.username} }">
                    {{ item.alias }}
                  </router-link>
                  <el-divider direction="vertical" />
                  <i class="fa fa-calendar-times-o"></i>&nbsp;
                  <span>{{ dayjs(item.createTime).calendar() }}</span>
                  <el-divider direction="vertical" />
                  <i class="fa fa-tags"></i>&nbsp;
                  <span
                    v-for="(tag, index) in item.tags"
                    :key="index"
                    class="tag is-hidden-mobile is-success is-light mr-1"
                  >
                    <router-link :to="{ name: 'tag', params: { name: tag.name } }">
                      {{ "#" + tag.name }}
                    </router-link>
                  </span>
                </div>
                <hr class="navbar-divider">
              </div>
            </div>
          </div>
        </b-tab-item>
        <b-tab-item
          v-if="showFocus"
          key="focus"
          value="focus"
          label="我的关注"
        >
          暂无关注
        </b-tab-item>
      </b-tabs>

      <!--分页-->
      <pagination
        v-show="page.total > 0"
        :total="page.total"
        :page.sync="page.current"
        :limit.sync="page.size"
        @pagination="init"
      />
    </el-card>
  </div>
</template>

<script>
import { getList } from '@/api/post'
import Pagination from '@/components/Pagination'

export default {
  name: 'TopicList',
  components: { Pagination },
  data() {
    return {
      allPost: [
        { avatar: String, createTime: Date },
        { current: 1, size: 10, total: 0 }
      ],
      focusPost: [
        { avatar: String, createTime: Date },
        { current: 1, size: 10, total: 0 }
      ],
      page: {
        current: 1,
        size: 10,
        total: 0
      },
      activeTab: 'all',
      showFocus: true
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      getList(this.page.current, this.page.size).then((response) => {
        const { all, focus } = response.data
        this.page.current = all.current
        this.page.total = all.total
        this.page.size = all.size
        this.allPost = all.records

        this.page.current = focus.current
        this.page.total = focus.total
        this.page.size = focus.size
        this.focusPost = focus.records
      })
    },
    handleClick(tab) {
      this.init(tab.name)
    }
  }
}
</script>

<style scoped>

</style>
