<template>
  <header class="header has-background-white has-text-black">
    <nav class="navbar container" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img :src="logoUrl" alt="logo" width="88" height="50">
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="/">
            🌐主页
          </a>
          <a class="navbar-item" href="/activities">
            🎉活动
          </a>
          <a class="navbar-item" href="/journey">
            ⛱晒图
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              🔰更多
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                💖关于
              </a>
              <a class="navbar-item" href="tencent://message/?Menu=yes&uin=1020317774">
                🕗联系
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item">
                👾反馈
              </a>
            </div>
          </div>
          <div class="navbar-item">
            <div class="field has-addons">
              <div class="control">
                <label>
                  <input v-model="searchKey" class="input" type="text" style="width: 100%;height: 100%" placeholder="关键词">
                </label>
              </div>
              <div class="control">
                <a class="button is-info" @click="search()">
                  搜索
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <b-switch
            v-model="darkMode"
            passive-type="is-warning"
            type="is-dark"
          >
            {{ darkMode ? "夜" : "昼" }}
          </b-switch>
          <div v-if="token == null || token === ''" class="navbar-item">
            <div class="buttons">
              <router-link :to="{path:'register'}" class="button is-primary">
                <strong>注册</strong>
              </router-link>
              <router-link :to="{path:'login'}" class="button is-light">
                登录
              </router-link>
            </div>
          </div>
          <div v-else class="navbar-menu">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                {{ user.alias }}
              </a>

              <div class="navbar-dropdown">
                <a class="navbar-item" @click="center(user.username)">
                  用户中心
                </a>
                <a class="navbar-item" @click="setting(user.username)">
                  设置中心
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item" @click="logout">
                  退出
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { disable as disableDarkMode, enable as enableDarkMode } from 'darkreader'
import { getDarkMode, setDarkMode } from '@/utils/auth'
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  data() {
    return {
      logoUrl: require('@/assets/logo.png'),
      searchKey: '',
      darkMode: false
    }
  },
  computed: {
    ...mapGetters(['token', 'user'])
  },
  watch: {
    // 监听Theme模式
    darkMode(val) {
      if (val) {
        enableDarkMode({})
      } else {
        disableDarkMode()
      }
      setDarkMode(this.darkMode)
    }
  },
  created() {
    // 获取cookie中的夜间还是白天模式
    this.darkMode = getDarkMode()
    if (this.darkMode) {
      enableDarkMode({})
    } else {
      disableDarkMode()
    }
  },
  methods: {
    center(username) {
      this.$router.push({ name: 'UserCenter', params: { username: username }})
    },
    setting(username) {
      this.$router.push({ name: 'UserSettings', params: { username: username }})
    },
    async logout() {
      this.$store.dispatch('user/logout').then(() => {
        this.$message.info('退出登录成功')
        setTimeout(() => {
          this.$router.push({ path: this.redirect || '/' })
        }, 500)
      })
    },
    search() {
      if (this.searchKey.trim() === null || this.searchKey.trim() === '') {
        this.$message.warning({
          showClose: true,
          message: '请输入关键字！',
          type: 'warning'
        })
        return false
      }
      this.$router.push({ path: '/search?key=' + this.searchKey })
    }
  }
}
</script>

<style scoped>
input {
  width: 80%;
  height: 86%;
}
</style>
