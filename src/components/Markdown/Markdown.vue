<template>
  <div id="vditor"></div>
</template>
<script>
import Vditor from "vditor"
import "vditor/dist/index.css"

export default {
  name: 'Markdown',
  data() {
    return {
      contentEditor: ""
    }
  },
  mounted() {
    this.contentEditor = new Vditor("vditor", {
      height: 450,
      width: 800,
      placeholder: '此处为话题内容……',
      toolbarConfig: {
        pin: true
      },
      cache: {
        enable: false
      },
      //这里写上传
      upload: {
        accept: 'image/*',
        url: 'http://127.0.0.1/question/fileupload',
        filename(name) {
          return name.replace(/[^(a-zA-Z0-9\u4e00-\u9fa5\.)]/g)
        },
        linkToImgCallback() {
          console.log("api处理")
        },
        success(editor, msg) {
          let responseData = JSON.parse(msg)
//此处后台返回一个上传保存的url地址，此时编辑器应该将该地址插入到文本中，，，
//本人能力有限，还没有研究出来，如果有大佬做出来希望可以教我一下
          console.log(responseData.url)
          return true
        },
        error(msg) {
          console.log(msg + "上传失败了")
        }
      },
    })
  },
  methods: {
    getValue() {
      const value = this.contentEditor.getValue();
      alert(value)
    }
  }
}
</script>

<style scoped>

</style>