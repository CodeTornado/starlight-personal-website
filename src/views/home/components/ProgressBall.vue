<!--
 * @Descripttion: 
 * (这是一个按钮,浮动并固定在页面右下角,它显示页面浏览进度,和隐藏显示其他按钮.
 *  其他三个按钮分别是: 查找相关文章, 滚动到底部, 滚动到顶部)
 * @version: (1.0)
 * @Author: (shimmer)
 * @Date: (2021年09月15日14:55:42)
 * @LastEditors: (2021年09月15日14:55:51)
 * @LastEditTime: (2021年09月15日14:55:55)
-->
<template>
  <div>
    <div class="right-music-frame">
      <iframe
        v-show="bgMusicShow"
        frameborder="no"
        border="0"
        marginwidth="0"
        marginheight="0"
        width="280"
        height="52"
        src="//music.163.com/outchain/player?type=2&id=1482686759&auto=1&height=32"
      ></iframe>
      <el-button
        v-show="slowDisplay"
        type="info"
        size="mini"
        class="right-music-show-button"
        :style="bgMusicShow ? '' : 'left: 0;opacity:0.5;'"
        @click="bgMusicShow = !bgMusicShow"
        >{{ bgMusicShow ? "隐藏" : "显示" }}</el-button
      >
    </div>
    <div class="right-bottom" @click="showOtherButton = !showOtherButton">
      <el-progress
        v-show="percentage <= 0"
        type="circle"
        :percentage="percentage"
        :width="75"
      >
        <el-button type="info" icon="el-icon-more" circle></el-button>
      </el-progress>
      <el-progress
        v-show="percentage > 0"
        type="circle"
        :percentage="percentage"
        :width="75"
      >
      </el-progress>

      <div v-show="showOtherButton">
        <el-button
          type="info"
          icon="el-icon-search"
          class="left-search-button"
          circle
        ></el-button>
        <el-button
          type="info"
          icon="el-icon-bottom"
          class="left-button-scorrll-to-bottom"
          circle
          @click="scorrllToBottom"
        ></el-button>
        <el-button
          type="info"
          icon="el-icon-top"
          class="left-button-scorrll-to-top"
          circle
          @click="scorrllToTop"
        ></el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slowDisplay: false,
      bgMusicShow: false,
      showOtherButton: false,
      percentage: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollPage)
    setTimeout(this.slowDisplayMethod, 1200)
  },
  watch: {
    showOtherButton: function (newVal) {
      // 显示其他按钮后4 秒后主动隐藏
      if (newVal) {
        var _this = this;
        setTimeout(function () {
          _this.showOtherButton = false
        }, 4000);
      }
    }
  },
  methods: {
    slowDisplayMethod () {
      this.slowDisplay = true
    },
    scrollPage () {
      var remainingRollingHeighta = document.body.scrollHeight - window.innerHeight;
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      var bottomContactDistance = remainingRollingHeighta - scrollTop;
      // 全部进度为
      this.percentage = Math.round((remainingRollingHeighta - bottomContactDistance) / remainingRollingHeighta * 100);
    },
    scorrllToBottom () {
      window.scroll({
        top: document.body.clientHeight,
        left: 0,
        behavior: 'smooth',
      })
    },
    scorrllToTop () {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    }
  }
}
</script>

<style>
.right-bottom {
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 999;
  cursor: pointer;
}
.right-music-frame {
  position: fixed;
  left: 2rem;
  top: 1rem;
  z-index: 999;
}
.right-music-show-button {
  display: inline-block;
  top: 2rem;
  position: fixed;
  opacity: 0.8;
}
.left-search-button {
  position: fixed;
  right: 8rem;
  bottom: 3rem;
}
.left-button-scorrll-to-bottom {
  position: fixed;
  right: 6.5rem;
  bottom: 6.5rem;
}
.left-button-scorrll-to-top {
  position: fixed;
  right: 3rem;
  bottom: 8rem;
}
</style>