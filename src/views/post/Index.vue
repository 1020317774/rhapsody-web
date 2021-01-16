<template>
  <div>
    <el-card shadow="never">
      <div slot="header" class="clearfix">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="最新资讯" name="latest">
            <article v-for="(item, index) in articleList" :key="index" class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img :src="item.avatar" style="border-radius: 5px;">
                </figure>
              </div>
              <div class="media-content">
                <div class="">
                  <p class="ellipsis is-ellipsis-1">
                    <el-tooltip class="item" effect="dark" :content="item.title" placement="top">
                      <router-link :to="{name:'post-detail',params:{id:item.id}}">
                        <span class="is-size-6">{{ item.title }}</span>
                        <el-badge
                          v-if="item.modifyTime!=null &&
                            dayjs(item.modifyTime) <= dayjs(item.createTime).add(3, 'day')
                            && dayjs(new Date()) <= dayjs(item.createTime).add(3, 'day')"
                          type="primary"
                          value="近3日有更新"
                        />
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
                      <span v-if="item.top" class="tag has-text-primary mr-1">置顶</span>

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
          </el-tab-pane>

          <el-tab-pane label="热门主题" name="hot">
            <article v-for="(item, index) in articleList" :key="index" class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img :src="item.avatar" style="border-radius: 5px;">
                </figure>
              </div>
              <div class="media-content">
                <div class="">
                  <p class="ellipsis is-ellipsis-1">
                    <el-tooltip class="item" effect="dark" :content="item.title" placement="top">
                      <router-link :to="{name:'post-detail',params:{id:item.id}}">
                        <span class="is-size-6">{{ item.title }}</span>
                        <el-badge
                          v-if="item.modifyTime!=null&&dayjs(item.createTime).add(1, 'day') >= dayjs(item.modifyTime)"
                          type="primary"
                          value="近3日有更新"
                        />

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

                      <router-link class="level-item" :to="{ name: 'user', params: { username: item.username }}">
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
          </el-tab-pane>

          <el-tab-pane label="精华主题" name="essence">
            <article v-for="(item, index) in articleList" :key="index" class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img :src="item.avatar" style="border-radius: 5px;">
                </figure>
              </div>
              <div class="media-content">
                <div class="">
                  <p class="ellipsis is-ellipsis-1">
                    <el-tooltip class="item" effect="dark" :content="item.title" placement="top">
                      <router-link :to="{name:'post-detail',params:{id:item.id}}">
                        <span class="is-size-6">{{ item.title }}</span>
                        <el-badge
                          v-if="item.modifyTime!=null&&dayjs(item.createTime).add(1, 'day') >= dayjs(item.modifyTime)"
                          type="primary"
                          value="近3日有更新"
                        />

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

                      <router-link class="level-item" :to="{ name: 'user', params: { username: item.username }}">
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
          </el-tab-pane>
        </el-tabs>
      </div>

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
      activeName: 'latest',
      articleList: [
        { avatar: String, createTime: Date }
      ],
      page: {
        current: 1,
        size: 10,
        total: 0,
        tab: 'latest'
      }
    }
  },
  created() {
    this.init(this.tab)
  },
  methods: {
    init(tab) {
      getList(this.page.current, this.page.size, tab).then((response) => {
        const { data } = response
        this.page.current = data.current
        this.page.total = data.total
        this.page.size = data.size
        this.articleList = data.records
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
