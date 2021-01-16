<template>
  <footer class="footer has-text-grey-light has-background-grey-darker">
    <div class="container">
      <div class="">
        <span>简洁、实用、美观</span>&nbsp;|&nbsp;

        <el-popover width="390" trigger="hover" content="需要本套系统，请联系Q:1020317774">
          <el-button type="text" slot="reference">获取本套系统</el-button>
        </el-popover>

        <span style="float: right">
          <router-link :to="{path:'/admin/login'}">
            管理员登录
          </router-link>
          |
          <a href="/?lang=zh_CN">中文</a> |
          <a href="/?lang=en_US">English</a>
        </span>
      </div>

      <div>
        <span>{{ title }} ALL RIGHTS RESERVED</span>
        <div style="float: right">
          <template>
            <b-taglist attached>
              <b-tag type="is-dark" size="is-normal">Design</b-tag>
              <b-tag type="is-info" size="is-normal">{{ author }}</b-tag>
            </b-taglist>
          </template>
        </div>
      </div>
    </div>
    <back-top></back-top>
  </footer>
</template>

<script>
import BackTop from "@/components/Backtop/BackTop";

export default {
  name: "Footer",
  components: {
    BackTop
  },
  data() {
    return {
      title: "© " + new Date().getFullYear() + ' Knox',
      author: 'Knox',
    };
  },
};
</script>

<style scoped>

footer {
  margin-top: 120px;
  height: 150px;
}
footer a{
  color: #bfbfbf;
}

</style>