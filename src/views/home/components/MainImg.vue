<!--
 * @Descripttion: 
 * (这是一个全屏的大网站封面, 用于用户了解主题, 顺便看下好看的背景图 )
 * @version: (1.0)
 * @Author: (shimmer)
 * @Date: (2021年09月15日14:55:42)
 * @LastEditors: (2021年09月15日14:55:51)
 * @LastEditTime: (2021年09月15日14:55:55)
-->
<template>
  <div :style="indexBackgroundDivCss">
    <div class="mask-div">
      <div style="text-align: center">
        <span style="font-size: 2.25rem; line-height: 2">{{ titleTxt }}</span>
        <br />
        <span style="font-size: 1.4rem">{{ content }}</span>
      </div>
      <div style="position: absolute; bottom: 1rem">
        <a
          class="a-anim"
          href="javascript:void(0)"
          @click="toParentScrollIntoView"
        >
          <div class="slide-fade-animation" style="font-size: 2.5rem">
            <span class="el-icon-arrow-down"></span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      jumpHtmlId: "testDiv",
      imgUrl: "assets/images/bgi.jpeg",
      titleTxt: "这是标题 123561",
      content: "这是内容 12378",
      indexBackgroundDivCss: {
        // backgroundImage: "url(" + require("@/" + imgUrl) + ")",
        // backgroundImage: "url(" + require("../../../assets/images/bgi.jpeg") + ")",
        background: "url(" + require("../../../assets/images/bgi.jpeg") + ")  no-repeat top center",
        
        width: '100vw',
        height: '100vh',
        backgroundAttachment: "fixed",
        position: "relative"
      }
    }
  },
  methods: {
    toParentScrollIntoView () {
      // document.getElementById(jumpHtmlId).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
      this.$emit("toParent", this.jumpHtmlId)
    }
  }
}
</script>

<style scoped>
.a-anim {
  color: #ffffff;
  background-color: #ffffff;
}
.mask-div {
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  color: white;
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
}
.slide-fade-animation {
  animation-name: example;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  position: relative;
}

@keyframes example {
  0% {
    left: 0px;
    top: 0px;
    opacity: 1;
  }

  100% {
    left: 0px;
    top: 20px;
    opacity: 0;
  }
}
</style>