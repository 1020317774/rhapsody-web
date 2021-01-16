<template>
  <section>
    <div class="box is-full" style="padding: 2px 12px;">
      <div class="level">
        <div class="level-left">
          <el-button type="text" @click="handleEvent('热门活动')">热门活动</el-button>
          <el-button type="text" @click="handleEvent('上海')">上海</el-button>
          <el-button type="text" @click="handleEvent('北京')">北京</el-button>
          <el-button type="text" @click="handleEvent('杭州')">杭州</el-button>
          <el-button type="text" @click="handleEvent('深圳')">深圳</el-button>
          <el-button type="text" @click="handleEvent('其他')">其他</el-button>
        </div>
        <div class="level-right has-text-grey has-text-weight-bold">
          <router-link :to="{name:'cooperation'}">
            💼 活动合作
          </router-link>
        </div>
      </div>
    </div>

    <div class="columns is-multiline">
      <div class="column is-12">
        <div class="columns">
          <div class="column is-half">
            <el-carousel height="230px">
              <el-carousel-item v-for="item in eventList" :key="item">
                <a :href="item.link" target="_blank">
                  <el-image fit="fill"
                            style="width: 100%; height: 100%"
                            :src="item.thumbnail"
                  >
                  </el-image>
                </a>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="column">
            <el-calendar :range="['2020-11-23', '2020-11-29']" title="今日无活动">
              <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
              <template
                  slot="dateCell"
                  slot-scope="{date, data}">
                <p :class="data.isSelected ? 'is-selected' : ''">
                  {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : '' }}
                </p>
              </template>
            </el-calendar>
          </div>
        </div>
      </div>

      <div class="column is-one-quarter" v-for="(item,index) in eventList" :key="index">
        <div class="box">
          <el-image fit="cover"
                    style="width: 100%; height: 200px"
                    :src="item.thumbnail">
          </el-image>

          <div>
            <p class="has-text-weight-bold my-3 is-size-6">{{ item.title }}</p>

            <div class="has-text-grey mt-4 is-size-6">
              <p><i class="fa fa-calendar mr-1"></i>{{ dayjs(item.time).format("YYYY/MM/DD") }}</p>
              <div class="level">
                <div class="level-left">
                  <p class="level-item"><i class="fa fa-map-marker mr-2"></i>{{ item.location }}</p>
                </div>
                <div class="level-right">
                  <a :href="item.link" target="_blank">
                    <el-button v-if="item.status" type="primary" class="level-item" size="mini" round>
                      立即报名
                    </el-button>
                    <el-button v-else type="info" class="level-item" size="mini" round>
                      活动详情
                    </el-button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {getList} from "@/api/activity";

export default {
  name: "index",
  data() {
    return {
      query: {
        page: 1,
        size: 10
      },
      eventList: []
    }
  },
  computed: {},
  created() {
    this.fetchList();
  },
  methods: {
    fetchList() {
      getList(this.query).then(value => {
        this.eventList = value.data.records
      });
    },
    handleEvent(location) {
      this.$message.success("已切换至" + location)
    }
  }
}
</script>

<style scoped>
.box {
  box-shadow: 0 -0.5em 0em -1.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  transition: all 0.1s ease-in-out;
  position: relative;
  overflow: hidden;
}

.columns .box:hover {
  transform: scale(1.03);
}
</style>