<template>
  <div class="columns">
    <!--文章详情-->
    <div class="column is-three-quarters">
      <!--主题-->
      <el-card shadow="never">
        <div slot="header">
          <h6 class="title is-5 ellipsis is-ellipsis-1">{{ topic.title }}</h6>
          <div class="has-text-grey">
            <span>发布者：{{ topicUser.alias }}</span>
            <el-divider direction="vertical" />
            首发：
            <span>{{ dayjs(topic.createTime).format('YYYY/MM/DD HH:mm:ss') }}</span>
            <el-divider direction="vertical" />
            <span>查看：{{ topic.view }}</span>
          </div>
        </div>
        <!--Markdown-->
        <div id="preview" />

        <!--标签-->
        <nav class="level has-text-grey is-size-7 mt-6">
          <div class="level-left">
            <p class="level-item">
              <b-taglist>
                <router-link
                  v-for="(tag, index) in tags"
                  :key="index"
                  :to="{ name: 'tag', params: { name: tag.name } }"
                >
                  <b-tag type="is-info is-light mr-1">
                    {{ "#" + tag.name }}
                  </b-tag>
                </router-link>
              </b-taglist>
            </p>
          </div>
          <div
            v-if="token && user.id === topicUser.id"
            class="level-right"
          >
            <router-link
              class="level-item"
              :to="{name:'topic-edit',params: {id:topic.id}}"
            >
              <span class="tag">编辑</span>
            </router-link>
            <a class="level-item">
              <span
                class="tag"
                @click="handleDelete(topic.id)"
              >删除</span>
            </a>
          </div>
        </nav>
      </el-card>

      <el-card
        class="box-card"
        shadow="never"
      >
        <div id="gitalk-container" />
      </el-card>
    </div>

    <div class="column">
      <!--作者-->
      <Author
        v-if="flag"
        :user="topicUser"
      />

      <!--推荐-->
      <recommend
        v-if="flag"
        :topic-id="topic.id"
      />
    </div>
  </div>
</template>

<script>
import { deleteTopic, getTopic } from '@/api/post'
import { mapGetters } from 'vuex'

import Author from '@/views/post/Author'

import Vditor from 'vditor'
import 'vditor/dist/index.css'
import Recommend from '@/views/post/Recommend'

import Gitalk from 'gitalk'

export default {
  name: 'TopicDetail',
  components: { Author, Recommend },
  computed: {
    ...mapGetters([
      'token', 'user'
    ])
  },
  data() {
    return {
      flag: false,
      topic: {
        content: ''
      },
      tags: [],
      topicUser: {}
    }
  },
  mounted() {
    const gitalk = new Gitalk({
      id: location.pathname,
      clientID: 'd69d7176a6b16783fd8c',
      clientSecret: 'fc5ed29b8aaaaaf2f449a74092197b0fe1c5c69e',
      repo: 'git-comments',
      owner: '1020317774',
      admin: ['1020317774'],
      distractionFreeMode: false
    })
    gitalk.render('gitalk-container')
  },
  created() {
    this.fetchTopic()
  },
  methods: {
    renderMarkdown(md) {
      Vditor.preview(document.getElementById('preview'), md, {
        hljs: { style: 'github' }
      })
    },
    // 初始化
    async fetchTopic() {
      getTopic(this.$route.params.id).then(response => {
        const { data } = response
        document.title = data.topic.title

        this.topic = data.topic
        this.tags = data.tags
        this.topicUser = data.user
        this.comments = data.comments
        this.renderMarkdown(this.topic.content)
        this.flag = true
      })
    },
    handleDelete(id) {
      deleteTopic(id).then(value => {
        const { code, message } = value
        alert(message)

        if (code === 200) {
          setTimeout(() => {
            this.$router.push({ path: '/' })
          }, 500)
        }
      })
    }
  }
}
</script>

<style>
#preview {
  min-height: 300px;
}
</style>
